import { Date, Document } from 'mongoose';
export declare type HistoryDocument = History & Document;
export declare class History {
    date: Date;
}
export declare const HistorySchema: import("mongoose").Schema<Document<History, any, any>, import("mongoose").Model<Document<History, any, any>, any, any, any>, any>;
