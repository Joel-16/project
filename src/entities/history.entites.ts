import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema()
export class History {
   @Prop({default : Date.now})
   date : Date

}

export const HistorySchema = SchemaFactory.createForClass(History)