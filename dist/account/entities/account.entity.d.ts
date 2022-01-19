import { BaseEntity } from "typeorm";
import { History } from './history.entites';
import { Photo } from '../../dto/dto';
export declare class Account extends BaseEntity {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    address: string;
    password: string;
    salt: string;
    email: string;
    picture: Photo;
    created_at: Date;
    history: History[];
    addDate(): void;
}
