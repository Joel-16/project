import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, BeforeUpdate, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, AfterUpdate, ManyToOne} from "typeorm";
import { History } from './history.entites';
import { Photo } from '../../dto/dto';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  password : string

  @Column()
  salt : string

  @Column({unique : true})
  email : string

  @Column({type : 'json'})
  picture : Photo

  @Column()
  created_at : Date

  @OneToMany(() => History, history=> history.account, {eager : true, nullable: true})
  @JoinColumn()
  history : History[]
  
  @BeforeInsert()
  addDate(){
     let date = new Date()
     this.created_at = date      
  }
}

