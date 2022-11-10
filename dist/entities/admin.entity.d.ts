import { BaseEntity } from "typeorm";
import { Role } from "../dto/dto";
export declare class Admin extends BaseEntity {
    id: string;
    role: Role;
    email: string;
    password: string;
    salt: string;
}
