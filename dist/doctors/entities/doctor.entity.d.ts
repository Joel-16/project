import { BaseEntity } from "typeorm";
import { Role } from "../../dto/dto";
import { Chats } from "../../chat/entities/chats.entity";
export declare class Doctor extends BaseEntity {
    id: string;
    role: Role;
    username: string;
    email: string;
    address: string;
    password: string;
    salt: string;
    created_at: Date;
    chats: Chats[];
}
