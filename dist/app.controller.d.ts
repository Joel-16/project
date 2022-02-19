import { AccountService } from './account/account.service';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { DoctorsService } from './doctors/doctors.service';
import { RegisterDto } from './dto/dto';
export declare class AppController {
    private readonly appService;
    private readonly accountService;
    private readonly authService;
    private readonly doctorService;
    constructor(appService: AppService, accountService: AccountService, authService: AuthService, doctorService: DoctorsService);
    getHello(): string;
    register(body: RegisterDto): Promise<{
        address: string;
        email: string;
        id: number;
        role: import("./dto/dto").Role;
        first_name: string;
        username: string;
        last_name: string;
        age: number;
        image: import("./dto/dto").Photo;
        created_at: Date;
        chats: import("./chat/entities/chats.entity").Chats[];
        history: import("./account/entities/history.entites").History[];
    }>;
    login(req: any): Promise<{
        token: any;
        user: any;
    }>;
    getDoctors(query: any): Promise<import("./doctors/entities/doctor.entity").Doctor[]>;
    all(): Promise<import("./account/entities/account.entity").Account[]>;
    delete(): Promise<import("typeorm").DeleteResult>;
}
