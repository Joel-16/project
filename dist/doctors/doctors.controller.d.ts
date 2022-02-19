import { DoctorsService } from './doctors.service';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    findAll(): Promise<import("./entities/doctor.entity").Doctor[]>;
    remove(id: string): string;
}
