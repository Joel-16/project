import { BaseEntity } from "typeorm";
import { Role } from "../../dto/dto";
import { Photo } from "../dto/update-doctor.dto";
import { Chats } from "../../chat/entities/chats.entity";
export declare class Doctor extends BaseEntity {
    id: number;
    role: Role;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    address: string;
    state: string;
    lga: string;
    image: Photo;
    password: string;
    salt: string;
    created_at: Date;
    chats: Chats[];
}
