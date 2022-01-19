import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { sign } from 'jsonwebtoken';
import { RegisterDto } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Account } from '../account/entities/account.entity'

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService
  ) { }

  async register(loginDto: RegisterDto) {
    let a = await this.accountService.findOne(loginDto.email)
    if (a) {
      throw new HttpException('Email address already used', HttpStatus.CONFLICT)
    }
    let credentials = await this.encryption(loginDto.password)
    loginDto.password = credentials.password
    loginDto.salt = credentials.salt
    console.log('got here')
    let { password, salt, ...account } = await this.accountService.create(loginDto)
    // let result =await this.emailService.emailConfirmation(account.id, loginDto.email, loginDto.firstName)
    // if (result){
    //    return {status : 200, message :"please view your email"}
    // }

    return account
  }

  async login(account : any){
    let payload = {email : account.email, role : account.role, sub : account.Id}
    let token = sign(payload, `${process.env.JWT_SECRET}`, {expiresIn : '1h'})
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

  async encryption(password: string) {
    let salt = await randomBytes(32).toString('hex');
    let hash = await pbkdf2Sync(password, salt, 1000, 64, "sha256").toString('hex');
    let cred = { password: hash, salt: salt }
    return cred
  }

  async decryption(account: Account, password: string) {
    if (account.password === pbkdf2Sync(password, account.salt, 1000, 64, "sha256").toString('hex')) {
      return true
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }

  // async validateStaff(email: string, password: string){
  //   try{
  //      let staff = await this.adminService.findStaff(email)
  //      if (staff && await this.decryption(staff, password)){
  //         let {password,salt, ...result}=staff
  //         return result
  //      }
  //   } catch (err) {
  //      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
  //   }
  //  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
