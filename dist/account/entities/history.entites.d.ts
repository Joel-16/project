import { BaseEntity } from "typeorm";
import { Account } from "./account.entity";
export declare class History extends BaseEntity {
    id: number;
    account: Account;
    date: Date;
    addDate(): void;
}
