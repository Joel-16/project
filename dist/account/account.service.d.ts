import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Repository } from 'typeorm';
export declare class AccountService {
    private readonly account;
    constructor(account: Repository<Account>);
    create(createAccountDto: CreateAccountDto): Promise<{
        password: string;
        salt: string;
        address: string;
        email: string;
    } & Account>;
    findAll(): Promise<Account[]>;
    findOne(email: string): Promise<Account>;
    update(id: number, updateAccountDto: UpdateAccountDto): string;
    remove(): Promise<import("typeorm").DeleteResult>;
}
