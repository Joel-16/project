import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany, CreateDateColumn } from "typeorm";
import { Role } from "../../dto/dto";
import { Photo } from "../dto/update-doctor.dto";
import { Chats } from "../../chat/entities/chats.entity";

@Entity()
export class Doctor extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column({ default: Role.Doctor })
   role: Role

   @Column({ nullable: true })
   first_name: string;

   @Column({ nullable: true })
   last_name: string;

   @Column({ nullable: true, unique: true })
   username: string

   @Column({ unique: true })
   email: string

   @Column({ nullable: true })
   address: string

   @Column({ nullable: true })
   state: string

   @Column({ nullable: true })
   lga: string

   @Column({ type: 'json', nullable: true })
   image: Photo

   @Column()
   password: string

   @Column()
   salt: string

   @CreateDateColumn({ default: new Date() })
   created_at: Date

   @OneToMany(() => Chats, chats => chats.doctor, { eager: true, nullable: true })
   @JoinColumn()
   chats: Chats[]
}
