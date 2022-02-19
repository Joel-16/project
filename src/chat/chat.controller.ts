import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChatService } from './chat.services'

@Controller('chat')
export class ChatController {
   constructor(
      private readonly chatService: ChatService,
   ) { }

   @Post()
   async create(@Body() body) {
      return await this.chatService.createMessage(body);
   }

   // @Get('one')
   // tes(@Query() query) {
   //    return this.accountService.findByUsername(query.one)
   // }
}