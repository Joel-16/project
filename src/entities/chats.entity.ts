import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import { Account } from "./account.entity";
import { Messages } from "./messages.entity";
import { Doctor } from "../doctors/entities/doctor.entity";

@Entity()
export class Chats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number
  
  @ManyToOne(() => Account, account=> account.chats)
  account : Account
  
  @ManyToOne(()=> Doctor, doctor=> doctor.chats,{onDelete : 'SET NULL'})
  doctor : Doctor
  
  @Column({type : 'timestamp', default : new Date()})
  created_at : Date
  
  @OneToMany(()=> Messages, messages=> messages.chats, {eager: true, nullable: true})
  @JoinColumn()
  messages : Messages[]
}

