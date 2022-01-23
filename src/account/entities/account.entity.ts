import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm";
import { History } from './history.entites';
import { Photo,  Role } from '../../dto/dto';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number

  @Column({ default : Role.Patient})
  role : Role

  @Column({nullable : true})
  first_name: string;

  @Column({nullable : true})
  last_name: string;

  @Column({nullable : true})
  age: number;

  @Column({nullable : true})
  address: string;

  @Column()
  password : string

  @Column()
  salt : string

  @Column({unique : true})
  email : string

  @Column({type : 'json',nullable : true})
  picture : Photo

  @Column({type : 'timestamp', default : new Date()})
  created_at : Date

  @OneToMany(() => History, history=> history.account, {eager : true, nullable: true})
  @JoinColumn()
  history : History[]
  
}

