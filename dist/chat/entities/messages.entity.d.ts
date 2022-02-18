import { BaseEntity } from "typeorm";
import { Chats } from "./chats.entity";
export declare class Messages extends BaseEntity {
    id: number;
    content: string;
    sender: number;
    recipient: number;
    created_at: Date;
    chats: Chats;
}
