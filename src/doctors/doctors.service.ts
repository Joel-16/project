import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

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

  findAll() {
    return `This action returns all doctors`;
  }

  async findOne(email: string) {
    return await this.doctor.findOne({email});
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
