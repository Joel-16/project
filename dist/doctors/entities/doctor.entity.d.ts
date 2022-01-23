import { BaseEntity } from "typeorm";
import { Role } from "../../dto/dto";
export declare class Doctor extends BaseEntity {
    id: string;
    role: Role;
    email: string;
    address: string;
    password: string;
    salt: string;
    created_at: Date;
}
