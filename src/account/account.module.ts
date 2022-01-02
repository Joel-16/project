import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account, AccountSchema } from '../entities/account.entity';

@Module({
  imports: [MongooseModule.forFeature([{name : Account.name, schema : AccountSchema}])],
  controllers: [AccountController],
  providers: [AccountService],
  exports : [AccountService]
})
export class AccountModule {}
