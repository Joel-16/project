import { RegisterDto, Role } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { AdminService } from '../admin/admin.service';
import { DoctorsService } from 'src/doctors/doctors.service';
export declare class AuthService {
    private readonly accountService;
    private readonly adminService;
    private readonly doctorService;
    constructor(accountService: AccountService, adminService: AdminService, doctorService: DoctorsService);
    register(loginDto: RegisterDto): Promise<{
        address: string;
        email: string;
        id: number;
        role: Role;
        first_name: string;
        username: string;
        last_name: string;
        age: number;
        image: import("../dto/dto").Photo;
        created_at: Date;
        chats: import("../entities/chats.entity").Chats[];
        history: import("../entities/history.entity").History[];
    }>;
    doctorReg(staff: any, pass: string): Promise<{
        email: string;
        password: string;
        salt: string;
        address: string;
    } & import("../doctors/entities/doctor.entity").Doctor>;
    adminReg(email: string, pass: string): Promise<{
        email: any;
        password: any;
        salt: any;
    } & import("../entities/admin.entity").Admin>;
    login(account: any): Promise<any>;
    validateUser(email: string, password: string): Promise<{
        id: number;
        role: Role;
        first_name: string;
        username: string;
        last_name: string;
        age: number;
        address: string;
        email: string;
        image: import("../dto/dto").Photo;
        created_at: Date;
        chats: import("../entities/chats.entity").Chats[];
        history: import("../entities/history.entity").History[];
    }>;
    validateDoctor(email: string, password: string): Promise<{
        id: number;
        role: Role;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        address: string;
        state: string;
        lga: string;
        image: import("../doctors/dto/update-doctor.dto").Photo;
        created_at: Date;
        chats: import("../entities/chats.entity").Chats[];
    }>;
    validateAdmin(email: string, password: string): Promise<{
        id: string;
        role: Role;
        email: string;
    }>;
    encryption(password: string): Promise<{
        password: string;
        salt: string;
    }>;
    decryption(account: any, password: string): Promise<boolean>;
}
