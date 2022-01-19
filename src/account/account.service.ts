import { Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity'
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
   @InjectRepository(Account)
   private readonly account : Repository<Account>
  ){}

  async create(createAccountDto: CreateAccountDto) {
    console.log('got here')
    let a = await this.account.save({
      password : createAccountDto.password,
      salt : createAccountDto.salt,
      address : createAccountDto.address,
      email : createAccountDto.email
    })
    console.log('got here')
    return a
  }

  async findAll() {
    return await this.account.find({})
    
  }

  async findOne(email: string) {
    console.log(email)
    let a =await this.account.findOne({email : email})
    console.log(a)
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
