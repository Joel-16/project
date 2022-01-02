import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { database } from './util/dbconnection';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    MongooseModule.forRoot(database()),
    AuthModule,
    AccountModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}