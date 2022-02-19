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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chats = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../../account/entities/account.entity");
const messages_entity_1 = require("./messages.entity");
const doctor_entity_1 = require("../../doctors/entities/doctor.entity");
let Chats = class Chats extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, account => account.chats),
    __metadata("design:type", account_entity_1.Account)
], Chats.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, doctor => doctor.chats, { onDelete: 'SET NULL' }),
    __metadata("design:type", doctor_entity_1.Doctor)
], Chats.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: new Date() }),
    __metadata("design:type", Date)
], Chats.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => messages_entity_1.Messages, messages => messages.chats, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Chats.prototype, "messages", void 0);
Chats = __decorate([
    (0, typeorm_1.Entity)()
], Chats);
exports.Chats = Chats;
//# sourceMappingURL=chats.entity.js.map