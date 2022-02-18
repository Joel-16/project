import { Server, Socket } from 'socket.io';
import { AccountService } from 'src/account/account.service';
import { ChatService } from './chat.services';
export declare class ChatGateway {
    private readonly accountService;
    private readonly chatService;
    constructor(accountService: AccountService, chatService: ChatService);
    server: Server;
    search(client: Socket, message: string): Promise<void>;
}
