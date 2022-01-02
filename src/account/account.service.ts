import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private account : Model<AccountDocument>
  ){}

  async create(createAccountDto: CreateAccountDto) {
    let a = new this.account(createAccountDto)
    return a.save()
  }

  async findAll() {
    return await this.account.find({})
    
  }

  async findOne(email: string) :Promise<Account |null> {
    let account = await this.account.findOne({email : email})
    return account
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  async remove() {
    let a = await this.account.deleteMany({})
    return a
  }
}
