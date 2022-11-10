import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm";
import { Role } from "../dto/dto";

@Entity()
export class Admin extends BaseEntity {
   @PrimaryGeneratedColumn()
   id : string

   @Column({default : Role.Admin})
   role : Role

   @Column({ unique : true})
   email : string

   @Column()
   password : string
   
   @Column()
   salt : string


}
