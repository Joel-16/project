import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountService } from '../account/account.service';
import { DoctorsService } from '../doctors/doctors.service';
import { Chats } from './entities/chats.entity';
import { Messages } from './entities/messages.entity';

@Injectable()
export class ChatService {
   constructor(
      private readonly doctorService: DoctorsService,
      private readonly accountService: AccountService,
      @InjectRepository(Chats)
      private readonly chats: Repository<Chats>,
      @InjectRepository(Messages)
      private readonly messages: Repository<Messages>
   ) { }

   private async createChat(user, doctors) {
      let account= await this.accountService.findById(user)
      let doctor= await this.doctorService.findById(doctors)
      let chat = await this.chats.save({
         account: account,
         doctor: doctor
      })
      account.chats.push(chat)
      doctor.chats.push(chat)
      await account.save()
      await doctor.save()
      return chat.id
   }

   async findChat(id: number) {
      return await this.chats.findOne({ id })
   }

   async createMessage({ id, user, doctor, content, sender, recipient }) {
      let chat:Chats 
      if (id === null) {
         let chatID = await this.createChat(user, doctor)
         chat = await this.chats.findOne(chatID)
      } else {
         chat = await this.findChat(id)
      }
      let message = await this.messages.save({
         content,
         sender,
         recipient
      })
      chat.messages.push(message)
      await chat.save()
      return message
   }

   async getMessages(id) {
      return await this.messages.find({ })
   }
}
