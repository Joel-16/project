import { ChatService } from './chat.services';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(body: any): Promise<{
        content: any;
        sender: any;
        recipient: any;
    } & import("./entities/messages.entity").Messages>;
}
