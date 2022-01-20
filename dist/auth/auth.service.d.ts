import { RegisterDto } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Account } from '../account/entities/account.entity';
export declare class AuthService {
    private readonly accountService;
    constructor(accountService: AccountService);
    register(loginDto: RegisterDto): Promise<{
        address: string;
        email: string;
        id: number;
        role: import("../account/dto/create-account.dto").Role;
        first_name: string;
        last_name: string;
        age: number;
        picture: import("../dto/dto").Photo;
        created_at: Date;
        history: import("../account/entities/history.entites").History[];
    }>;
    login(account: any): Promise<any>;
    validateUser(email: string, password: string): Promise<{
        id: number;
        role: import("../account/dto/create-account.dto").Role;
        first_name: string;
        last_name: string;
        age: number;
        address: string;
        email: string;
        picture: import("../dto/dto").Photo;
        created_at: Date;
        history: import("../account/entities/history.entites").History[];
    }>;
    encryption(password: string): Promise<{
        password: string;
        salt: string;
    }>;
    decryption(account: Account, password: string): Promise<boolean>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
