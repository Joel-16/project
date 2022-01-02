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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const account_service_1 = require("../account/account.service");
let AuthService = class AuthService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async register(loginDto) {
        let a = await this.accountService.findOne(loginDto.email);
        if (a) {
            throw new common_1.HttpException('Email address already used', common_1.HttpStatus.CONFLICT);
        }
        let credentials = await this.encryption(loginDto.password);
        loginDto.password = credentials.password;
        loginDto.salt = credentials.salt;
        let _a = await this.accountService.create(loginDto), { password, salt } = _a, account = __rest(_a, ["password", "salt"]);
        return account;
    }
    async encryption(password) {
        let salt = await (0, crypto_1.randomBytes)(32).toString('hex');
        let hash = await (0, crypto_1.pbkdf2Sync)(password, salt, 1000, 64, "sha256").toString('hex');
        let cred = { password: hash, salt: salt };
        return cred;
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map