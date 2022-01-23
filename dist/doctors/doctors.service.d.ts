import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorsService {
    private readonly doctor;
    constructor(doctor: Repository<Doctor>);
    create(doctorDto: CreateDoctorDto): Promise<{
        email: string;
        password: string;
        salt: string;
        address: string;
    } & Doctor>;
    findAll(): string;
    findOne(email: string): Promise<Doctor>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): string;
    remove(id: number): string;
}
