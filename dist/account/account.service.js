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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs_1 = require("fs");
const account_entity_1 = require("../entities/account.entity");
let AccountService = class AccountService {
    constructor(account) {
        this.account = account;
    }
    async create(createAccountDto) {
        let a = await this.account.save({
            password: createAccountDto.password,
            salt: createAccountDto.salt,
            address: createAccountDto.address,
            email: createAccountDto.email
        });
        return a;
    }
    async findAll() {
        return await this.account.find({});
    }
    async findOne(email) {
        let a = await this.account.findOne({ where: { email: email } });
        return a;
    }
    async findById(id) {
        let a = await this.account.findOne({ where: { id: id } });
        return a;
    }
    async profile(profile, user) {
        let account = await this.account.findOne({ id: user.id });
        let link;
        if (account.image != null) {
            link = account.image.path;
            (0, fs_1.unlinkSync)(link);
        }
        account.address = profile.address,
            account.age = profile.age,
            account.first_name = profile.first_name,
            account.last_name = profile.last_name,
            account.image = profile.image;
        await account.save();
        return account;
    }
    async remove() {
        let a = await this.account.delete({});
        return a;
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map