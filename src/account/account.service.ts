import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unlinkSync } from 'fs';
import { Account } from './entities/account.entity'
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateProfile } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
   @InjectRepository(Account)
   private readonly account : Repository<Account>
  ){}

  async create(createAccountDto: CreateAccountDto) {
    let a = await this.account.save({
      password : createAccountDto.password,
      salt : createAccountDto.salt,
      address : createAccountDto.address,
      email : createAccountDto.email
    })
    return a
  }

  async findAll() {
    return await this.account.find({})
    
  }

  async findOne(email: string) {
    let a =await this.account.findOne({where : {email : email}})
    return a
  }

  async findById(id: number) {
    let a =await this.account.findOne({where : {id : id}})
    return a
  }

  async profile (profile : UpdateProfile, user){
    let account = await this.account.findOne({id : user.id})
    let link : string
    if (account.image){
      link =account.image.path
    }
    account.address = profile.address,
    account.age =profile.age,
    account.first_name = profile.first_name,
    account.last_name = profile.last_name,
    account.image = profile.image
    await account.save()
    unlinkSync(link)
    return account
  }

  // async findByUsername (username){
  //   let a =await this.account.find({where : {email : Like(`${username}%`)}})
  //   return a
  // }

  async remove() {
    let a = await this.account.delete({})
    return a
  }
}
