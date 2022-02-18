import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
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
    findById(id: number): Promise<Account>;
    remove(): Promise<import("typeorm").DeleteResult>;
}
