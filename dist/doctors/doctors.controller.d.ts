import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(createDoctorDto: CreateDoctorDto): Promise<{
        email: string;
        password: string;
        salt: string;
        address: string;
    } & import("./entities/doctor.entity").Doctor>;
    findAll(): Promise<import("./entities/doctor.entity").Doctor[]>;
    remove(id: string): string;
}
