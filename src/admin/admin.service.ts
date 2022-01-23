import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly admin: Repository<Admin>
  ) { }

  async create(CreateAdminDto) {
    let admin = await this.admin.save({
      email : CreateAdminDto.email,
      password : CreateAdminDto.password,
      salt : CreateAdminDto.salt
    })
    return admin
  }

  findAll() {
    return `This action returns all admin`;
  }

  async findOne(email: string) {
    return await this.admin.findOne({email})
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
