import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DoctorsModule } from '../doctors/doctors.module';
import { AccountModule } from '../account/account.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './util/local.strategy';
import { AdminModule } from '../admin/admin.module';


@Module({
  imports : [AccountModule, PassportModule, DoctorsModule, forwardRef(()=> AdminModule)],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports : [AuthService]
})
export class AuthModule {}
