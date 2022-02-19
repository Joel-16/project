import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { unlinkSync } from 'fs';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateProfile } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctor : Repository<Doctor>
  ){}
  async create(doctorDto : CreateDoctorDto ) {
    let doctor = await this.doctor.save({
      email : doctorDto.email,
      password : doctorDto.password,
      salt : doctorDto.salt,
      address : doctorDto.address
    })
    return doctor
  }

  async profile (profile : UpdateProfile, user){
    let account = await this.doctor.findOne({id : user.id})
    let link : string
    if (account.image != null){
      link =account.image.path
      unlinkSync(link)
    }
    account.address = profile.address
    account.first_name = profile.first_name
    account.last_name = profile.last_name
    account.state = profile.state,
    account.lga =profile.lga
    account.image = profile.image
    await account.save()
    return account
  }
  async findById(id : number) {
    return await this.doctor.findOne(id)
  }

  async findOne(email: string) {
    return await this.doctor.findOne({email});
  }
  async findByLocation ({state, lg}){
    return await this.doctor.find({where : {state : state, lga : lg}})
  }

  async findAll() {
    return await this.doctor.find({})
  }

  async remove(id: number) {
    return await this.doctor.delete({id : id});
  }
}
