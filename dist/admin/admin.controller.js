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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const auth_service_1 = require("../auth/auth.service");
const doctors_service_1 = require("../doctors/doctors.service");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
let AdminController = class AdminController {
    constructor(adminService, doctorService, authService) {
        this.adminService = adminService;
        this.doctorService = doctorService;
        this.authService = authService;
    }
    async create(staff) {
        let a = await this.doctorService.findOne(staff.email);
        if (a) {
            throw new common_1.HttpException('Email already used', common_1.HttpStatus.BAD_REQUEST);
        }
        let password = await (0, crypto_1.randomBytes)(4).toString('hex');
        console.log(password);
        let result = await this.authService.doctorReg(staff, password);
        if (result) {
            return result;
        }
    }
    findAll() {
        return this.adminService.findAll();
    }
    findOne(id) {
        return this.adminService.findOne(id);
    }
    remove(id) {
        return this.adminService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        doctors_service_1.DoctorsService,
        auth_service_1.AuthService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map