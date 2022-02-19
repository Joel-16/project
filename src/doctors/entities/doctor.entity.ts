import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany, CreateDateColumn} from "typeorm";
import { Role } from "../../dto/dto";
import { Chats } from "../../chat/entities/chats.entity";

@Entity()
export class Doctor extends BaseEntity {
   @PrimaryGeneratedColumn()
   id : string

   @Column({default : Role.Doctor})
   role : Role

   @Column({nullable: true, unique: true})
   username : string
   
   @Column({ unique : true})
   email : string

   @Column({nullable: true})
   address : string

   @Column({nullable: true})
   state : string

   @Column({nullable: true})
   lga : string

   @Column()
   password : string
   
   @Column()
   salt : string

   @CreateDateColumn({ default : new Date()})
   created_at : Date

   @OneToMany(()=> Chats, chats => chats.doctor, {eager : true, nullable: true })
   @JoinColumn()
   chats : Chats[]
}
