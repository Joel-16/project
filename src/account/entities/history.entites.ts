import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, BeforeUpdate, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, AfterUpdate, ManyToOne} from "typeorm"
import { Account } from "./account.entity"

@Entity()
export class History extends BaseEntity{

   @PrimaryGeneratedColumn()
   id : number

   @OneToOne(()=> Account, account=>account.address)
   account : Account
   
   @Column()
   date : Date

   @BeforeInsert()
   addDate(){
      let date = new Date()
      this.date = date      
   }
}