"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const account_service_1 = require("../account/account.service");
const doctors_service_1 = require("../doctors/doctors.service");
const chats_entity_1 = require("./entities/chats.entity");
const messages_entity_1 = require("./entities/messages.entity");
let ChatService = class ChatService {
    constructor(doctorService, accountService, chats, messages) {
        this.doctorService = doctorService;
        this.accountService = accountService;
        this.chats = chats;
        this.messages = messages;
    }
    async createChat(user, doctors) {
        let account = await this.accountService.findById(user);
        let doctor = await this.doctorService.findById(doctors);
        let chat = await this.chats.save({
            account: account,
            doctor: doctor
        });
        account.chats.push(chat);
        doctor.chats.push(chat);
        await account.save();
        await doctor.save();
        return chat.id;
    }
    async findChat(id) {
        return await this.chats.findOne({ id });
    }
    async createMessage({ id, user, doctor, content, sender, recipient }) {
        let chat;
        if (id === null) {
            let chatID = await this.createChat(user, doctor);
            chat = await this.chats.findOne(chatID);
        }
        else {
            chat = await this.findChat(id);
        }
        let message = await this.messages.save({
            content,
            sender,
            recipient
        });
        chat.messages.push(message);
        await chat.save();
        return message;
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(chats_entity_1.Chats)),
    __param(3, (0, typeorm_1.InjectRepository)(messages_entity_1.Messages)),
    __metadata("design:paramtypes", [doctors_service_1.DoctorsService,
        account_service_1.AccountService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.services.js.map