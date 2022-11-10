import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from '../doctors/doctors.module';
import { AuthModule } from '../auth/auth.module';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from '../entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), DoctorsModule, forwardRef(()=>AuthModule)],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule { }
