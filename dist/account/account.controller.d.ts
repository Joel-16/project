import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<import("../entities/account.entity").Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(import("../entities/account.entity").Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): void;
    update(id: string, updateAccountDto: UpdateAccountDto): string;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
