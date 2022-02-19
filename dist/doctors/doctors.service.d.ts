import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateProfile } from './dto/update-doctor.dto';
export declare class DoctorsService {
    private readonly doctor;
    constructor(doctor: Repository<Doctor>);
    create(doctorDto: CreateDoctorDto): Promise<{
        email: string;
        password: string;
        salt: string;
        address: string;
    } & Doctor>;
    profile(profile: UpdateProfile, user: any): Promise<Doctor>;
    findById(id: number): Promise<Doctor>;
    findOne(email: string): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
