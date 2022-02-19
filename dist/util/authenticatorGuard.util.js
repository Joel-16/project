"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGuard = exports.DoctorGuard = exports.AuthenticatorGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let AuthenticatorGuard = class AuthenticatorGuard {
    canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            let token = req.headers.authorization.split(' ')[1];
            let decodedTokn = jwt.verify(token, process.env.JWT_SECRET);
            let a = JSON.parse(JSON.stringify(decodedTokn));
            req.user = a;
            return true;
        }
        catch (err) {
            throw new common_1.HttpException("Expired Token, please Re-direct to login page", common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthenticatorGuard = __decorate([
    (0, common_1.Injectable)()
], AuthenticatorGuard);
exports.AuthenticatorGuard = AuthenticatorGuard;
let DoctorGuard = class DoctorGuard {
    canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            let token = req.headers.authorization.split(' ')[1];
            let decodedTokn = jwt.verify(token, process.env.DOCTOR_SECRET);
            let a = JSON.parse(JSON.stringify(decodedTokn));
            req.user = a;
            return true;
        }
        catch (err) {
            throw new common_1.HttpException("Expired Token, please Re-direct to login page", common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
DoctorGuard = __decorate([
    (0, common_1.Injectable)()
], DoctorGuard);
exports.DoctorGuard = DoctorGuard;
let AdminGuard = class AdminGuard {
    canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            let token = req.headers.authorization.split(' ')[1];
            let decodedTokn = jwt.verify(token, process.env.ADMIN_SECRET);
            let a = JSON.parse(JSON.stringify(decodedTokn));
            req.user = a;
            return true;
        }
        catch (err) {
            throw new common_1.HttpException("Expired Token, please Re-direct to login page", common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AdminGuard = __decorate([
    (0, common_1.Injectable)()
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=authenticatorGuard.util.js.map