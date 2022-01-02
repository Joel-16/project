import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { RegisterDto } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService : AccountService
  ){}

  async register(loginDto : RegisterDto){
    let a =await this.accountService.findOne(loginDto.email)
    if (a){
       throw new HttpException('Email address already used', HttpStatus.CONFLICT)
    }
    let credentials = await this.encryption(loginDto.password)
    loginDto.password = credentials.password
    loginDto.salt = credentials.salt
    let  {password,salt, ...account}= await this.accountService.create(loginDto)
    // let result =await this.emailService.emailConfirmation(account.id, loginDto.email, loginDto.firstName)
    // if (result){
    //    return {status : 200, message :"please view your email"}
    // }
       
    return account
 }

  async encryption(password: string) {
    let salt = await randomBytes(32).toString('hex');
    let hash = await pbkdf2Sync(password, salt, 1000, 64, "sha256").toString('hex');
    let cred = { password: hash, salt: salt }
    return cred
  }

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
