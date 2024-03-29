import { BaseEntity } from "typeorm";
import { History } from './history.entity';
import { Photo, Role } from '../dto/dto';
import { Chats } from "./chats.entity";
export declare class Account extends BaseEntity {
    id: number;
    role: Role;
    first_name: string;
    username: string;
    last_name: string;
    age: number;
    address: string;
    password: string;
    salt: string;
    email: string;
    image: Photo;
    created_at: Date;
    chats: Chats[];
    history: History[];
}
