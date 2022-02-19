import { UpdateProfile } from 'src/account/dto/update-account.dto';
import { DoctorsService } from './doctors.service';
export declare class DoctorsController {
    private readonly doctorService;
    constructor(doctorService: DoctorsService);
    findAll(): Promise<import("./entities/doctor.entity").Doctor[]>;
    profile(image: any, body: UpdateProfile, req: any): Promise<import("./entities/doctor.entity").Doctor>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
