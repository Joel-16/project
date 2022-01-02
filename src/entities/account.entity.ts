import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { History } from './history.entites';
import { Photo } from '../dto/dto';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop({required : true})
  password : string

  @Prop({required : true})
  salt : string

  @Prop({required : true, unique : true})
  email : string

  @Prop({type : Photo})
  picture : Photo

  @Prop({default : Date.now})
  created_at : Date

  @Prop({type :[{type : mongoose.Schema.Types.ObjectId, ref: 'History'}]})
  history : History[]

  
}

export const AccountSchema = SchemaFactory.createForClass(Account);