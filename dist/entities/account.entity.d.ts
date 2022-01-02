import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { History } from './history.entites';
import { Photo } from '../dto/dto';
export declare type AccountDocument = Account & Document;
export declare class Account {
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
}
export declare const AccountSchema: mongoose.Schema<Document<Account, any, any>, mongoose.Model<Document<Account, any, any>, any, any, any>, any>;
