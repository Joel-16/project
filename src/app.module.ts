import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { ChatModule } from './chat/chat.module';
import { AdminModule } from './admin/admin.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot(),
    AuthModule,
    AccountModule,
    ChatModule,
    AdminModule,
    DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}