import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '../account/account.module';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { ChatGateway } from './chat.gateway';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.services';
import { Chats } from '../entities/chats.entity';
import { Messages } from '../entities/messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chats, Messages]), AccountModule, DoctorsModule],
  providers: [ChatGateway, ChatService],
  controllers : [ChatController]
})
export class ChatModule {}
