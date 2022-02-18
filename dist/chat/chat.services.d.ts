import { Repository } from 'typeorm';
import { AccountService } from '../account/account.service';
import { DoctorsService } from '../doctors/doctors.service';
import { Chats } from './entities/chats.entity';
import { Messages } from './entities/messages.entity';
export declare class ChatService {
    private readonly doctorService;
    private readonly accountService;
    private readonly chats;
    private readonly messages;
    constructor(doctorService: DoctorsService, accountService: AccountService, chats: Repository<Chats>, messages: Repository<Messages>);
    private createChat;
    findChat(id: number): Promise<Chats>;
    createMessage({ id, user, doctor, content, sender, recipient }: {
        id: any;
        user: any;
        doctor: any;
        content: any;
        sender: any;
        recipient: any;
    }): Promise<{
        content: any;
        sender: any;
        recipient: any;
    } & Messages>;
    getMessages(id: any): Promise<Messages[]>;
}
