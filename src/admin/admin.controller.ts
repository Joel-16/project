import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Req } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { AuthService } from '../auth/auth.service';
import { DoctorsService } from '../doctors/doctors.service';
import { AdminService } from './admin.service';
import { CreateDoctorDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly doctorService : DoctorsService,
    private readonly authService : AuthService
    ) {}

  @Post('create')
  async create(@Body() staff : CreateDoctorDto) {
    let a = await this.doctorService.findOne(staff.email)
    if (a) {
      throw new HttpException('Email already used', HttpStatus.BAD_REQUEST)
    }
    let password = await randomBytes(4).toString('hex');
    console.log(password)
    let result = await this.authService.doctorReg(staff, password)
    if (result) {
      return result
    }
  }


  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
