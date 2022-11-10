import { BaseEntity } from "typeorm";
import { Account } from "./account.entity";
import { Messages } from "./messages.entity";
import { Doctor } from "../doctors/entities/doctor.entity";
export declare class Chats extends BaseEntity {
    id: number;
    account: Account;
    doctor: Doctor;
    created_at: Date;
    messages: Messages[];
}
