import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccountModule } from '../account/account.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './util/local.strategy';

@Module({
  imports : [AccountModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports : [AuthService]
})
export class AuthModule {}
