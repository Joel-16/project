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
const jsonwebtoken_1 = require("jsonwebtoken");
const dto_1 = require("../dto/dto");
const account_service_1 = require("../account/account.service");
const admin_service_1 = require("../admin/admin.service");
const doctors_service_1 = require("../doctors/doctors.service");
let AuthService = class AuthService {
    constructor(accountService, adminService, doctorService) {
        this.accountService = accountService;
        this.adminService = adminService;
        this.doctorService = doctorService;
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
    async doctorReg(staff, pass) {
        let credentials = await this.encryption(pass);
        staff = Object.assign(Object.assign({}, staff), credentials);
        let a = await this.doctorService.create(staff);
        return a;
    }
    async adminReg(email, pass) {
        let credentials = await this.encryption(pass);
        let a = await this.adminService.create(Object.assign({ email: email }, credentials));
        return a;
    }
    async login(account) {
        let payload = { email: account.email, role: account.role, id: account.id };
        let token;
        if (account.role === dto_1.Role.Patient) {
            token = (0, jsonwebtoken_1.sign)(payload, `${process.env.JWT_SECRET}`, { expiresIn: '2h' });
        }
        if (account.role === dto_1.Role.Doctor) {
            token = (0, jsonwebtoken_1.sign)(payload, `${process.env.DOCTOR_SECRET}`, { expiresIn: '2h' });
        }
        if (account.role === dto_1.Role.Admin) {
            token = (0, jsonwebtoken_1.sign)(payload, `${process.env.ADMIN_SECRET}`, { expiresIn: '2h' });
        }
        return token;
    }
    async validateUser(email, password) {
        try {
            let account = await this.accountService.findOne(email);
            if (account && await this.decryption(account, password)) {
                let { password, salt } = account, result = __rest(account, ["password", "salt"]);
                return result;
            }
        }
        catch (err) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async validateDoctor(email, password) {
        try {
            let doctor = await this.doctorService.findOne(email);
            if (doctor && await this.decryption(doctor, password)) {
                let { password, salt } = doctor, result = __rest(doctor, ["password", "salt"]);
                return result;
            }
        }
        catch (err) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async validateAdmin(email, password) {
        try {
            let admin = await this.adminService.findOne(email);
            if (admin && await this.decryption(admin, password)) {
                let { password, salt } = admin, result = __rest(admin, ["password", "salt"]);
                return result;
            }
        }
        catch (err) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async encryption(password) {
        let salt = await (0, crypto_1.randomBytes)(32).toString('hex');
        let hash = await (0, crypto_1.pbkdf2Sync)(password, salt, 1000, 64, "sha256").toString('hex');
        let cred = { password: hash, salt: salt };
        return cred;
    }
    async decryption(account, password) {
        if (account.password === (0, crypto_1.pbkdf2Sync)(password, account.salt, 1000, 64, "sha256").toString('hex')) {
            return true;
        }
        else {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        admin_service_1.AdminService,
        doctors_service_1.DoctorsService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map