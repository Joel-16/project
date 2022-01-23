import { AccountService } from './account/account.service';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { RegisterDto } from './dto/dto';
export declare class AppController {
    private readonly appService;
    private readonly accountService;
    private readonly authService;
    constructor(appService: AppService, accountService: AccountService, authService: AuthService);
    getHello(): string;
    register(body: RegisterDto): Promise<{
        address: string;
        email: string;
        id: number;
        role: import("./dto/dto").Role;
        first_name: string;
        last_name: string;
        age: number;
        picture: import("./dto/dto").Photo;
        created_at: Date;
        history: import("./account/entities/history.entites").History[];
    }>;
    login(req: any): Promise<{
        token: any;
        user: any;
    }>;
    all(): Promise<import("./account/entities/account.entity").Account[]>;
    delete(): Promise<import("typeorm").DeleteResult>;
}
