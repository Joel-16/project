import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany, CreateDateColumn} from "typeorm";
import { Role } from "../../dto/dto";

@Entity()
export class Doctor extends BaseEntity {
   @PrimaryGeneratedColumn()
   id : string

   @Column({default : Role.Doctor})
   role : Role

   @Column({ unique : true})
   email : string

   @Column({nullable: true})
   address : string

   @Column()
   password : string
   
   @Column()
   salt : string

   @CreateDateColumn({ default : new Date()})
   created_at : Date
}
