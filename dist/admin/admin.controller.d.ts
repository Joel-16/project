import { AuthService } from '../auth/auth.service';
import { DoctorsService } from '../doctors/doctors.service';
import { AdminService } from './admin.service';
import { CreateDoctorDto } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    private readonly doctorService;
    private readonly authService;
    constructor(adminService: AdminService, doctorService: DoctorsService, authService: AuthService);
    create(staff: CreateDoctorDto): Promise<{
        email: string;
        password: string;
        salt: string;
        address: string;
    } & import("../doctors/entities/doctor.entity").Doctor>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/admin.entity").Admin>;
    remove(id: string): string;
}
