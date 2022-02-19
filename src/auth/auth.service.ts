import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { sign } from 'jsonwebtoken';
import { RegisterDto, Role } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { AdminService } from '../admin/admin.service';
import { DoctorsService } from 'src/doctors/doctors.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly adminService: AdminService,
    private readonly doctorService: DoctorsService
  ) { }

  async register(loginDto: RegisterDto) {
    let a = await this.accountService.findOne(loginDto.email)
    if (a) {
      throw new HttpException('Email address already used', HttpStatus.CONFLICT)
    }
    let credentials = await this.encryption(loginDto.password)
    loginDto.password = credentials.password
    loginDto.salt = credentials.salt
    let { password, salt, ...account } = await this.accountService.create(loginDto)
    // let result =await this.emailService.emailConfirmation(account.id, loginDto.email, loginDto.firstName)
    // if (result){
    //    return {status : 200, message :"please view your email"}
    // }

    return account
  }

  async doctorReg(staff, pass: string) {
    let credentials = await this.encryption(pass)
    staff = { ...staff, ...credentials }
    let a = await this.doctorService.create(staff)
    // let result =await this.emailService.staff(staff.email, pass)
    return a
  }

  async adminReg(email: string, pass: string) {
    let credentials = await this.encryption(pass)
    let a = await this.adminService.create({ email: email, ...credentials })
    return a
  }
  async login(account: any) {
    let payload = { email: account.email, role: account.role, id: account.id }
    let token
    if (account.role === Role.Patient) {
      token = sign(payload, `${process.env.JWT_SECRET}`, { expiresIn: '2h' })
    }
    if (account.role === Role.Doctor) {
      token = sign(payload, `${process.env.DOCTOR_SECRET}`, { expiresIn: '2h' })
    }
    if (account.role === Role.Admin) {
      token = sign(payload, `${process.env.ADMIN_SECRET}`, { expiresIn: '2h' })
    }
    return token
  }

  async validateUser(email: string, password: string) {
    try {
      let account = await this.accountService.findOne(email)
      if (account && await this.decryption(account, password)) {
        let { password, salt, ...result } = account
        return result
      }
    } catch (err) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }

  async validateDoctor(email: string, password: string) {
    try {
      let doctor = await this.doctorService.findOne(email)
      if (doctor && await this.decryption(doctor, password)) {
        let { password, salt, ...result } = doctor
        return result
      }
    } catch (err) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }

  async validateAdmin(email: string, password: string) {
    try {
      let admin = await this.adminService.findOne(email)
      if (admin && await this.decryption(admin, password)) {
        let { password, salt, ...result } = admin
        return result
      }
    } catch (err) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }
  async encryption(password: string) {
    let salt = await randomBytes(32).toString('hex');
    let hash = await pbkdf2Sync(password, salt, 1000, 64, "sha256").toString('hex');
    let cred = { password: hash, salt: salt }
    return cred
  }

  async decryption(account, password: string) {
    if (account.password === pbkdf2Sync(password, account.salt, 1000, 64, "sha256").toString('hex')) {
      return true
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }

}
