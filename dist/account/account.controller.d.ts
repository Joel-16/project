import { AccountService } from './account.service';
import { UpdateProfile } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    findAll(): Promise<import("./entities/account.entity").Account[]>;
    profile(image: any, body: UpdateProfile, req: any): Promise<import("./entities/account.entity").Account>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
