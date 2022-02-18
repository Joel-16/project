import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AccountService } from 'src/account/account.service';
import { ChatService } from './chat.services';


@WebSocketGateway({cors : { origin : '*'}})
export class ChatGateway {
  constructor(
    private readonly accountService : AccountService,
    private readonly chatService : ChatService
  ){}
  @WebSocketServer()
  server : Server;

  // @SubscribeMessage('message')
  // handleMessage(client : Socket, message : string) {
  //   console.log(message)
  //   this.server.emit('message', message)
    
  // }

  @SubscribeMessage('search')
  async search(client : Socket, message : string) {
    // let a = await this.accountService.findByUsername(message)
    console.log(message)
    this.server.emit('search',message)
  }

  
}
