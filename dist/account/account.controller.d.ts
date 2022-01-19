import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<{
        password: string;
        salt: string;
        address: string;
        email: string;
    } & import("./entities/account.entity").Account>;
    findAll(): Promise<import("./entities/account.entity").Account[]>;
    findOne(id: string): void;
    update(id: string, updateAccountDto: UpdateAccountDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
