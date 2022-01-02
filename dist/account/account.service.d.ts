import { Model } from 'mongoose';
import { Account, AccountDocument } from '../entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountService {
    private account;
    constructor(account: Model<AccountDocument>);
    create(createAccountDto: CreateAccountDto): Promise<Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(email: string): Promise<Account | null>;
    update(id: number, updateAccountDto: UpdateAccountDto): string;
    remove(): Promise<import("mongodb").DeleteResult>;
}
