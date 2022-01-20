import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity'
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';

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

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  async remove() {
    let a = await this.account.delete({})
    return a
  }
}
