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
exports.DoctorsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const update_account_dto_1 = require("../account/dto/update-account.dto");
const authenticatorGuard_util_1 = require("../util/authenticatorGuard.util");
const fileUpload_1 = require("../util/fileUpload");
const doctors_service_1 = require("./doctors.service");
let DoctorsController = class DoctorsController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    findAll() {
        return this.doctorService.findAll();
    }
    async profile(image, body, req) {
        if (typeof image === 'object') {
            image = {
                link: 'http://localhost:3000' + '/' + image.filename,
                path: image.path
            };
        }
        return await this.doctorService.profile(Object.assign(Object.assign({}, body), { image }), req.user);
    }
    remove(id) {
        return this.doctorService.remove(Number(id));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DoctorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(authenticatorGuard_util_1.DoctorGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.diskStorage)({ destination: fileUpload_1.imageStorage.destinationPath, filename: fileUpload_1.imageStorage.customFileName }) })),
    (0, common_1.Post)('profile'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_account_dto_1.UpdateProfile, Object]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "profile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DoctorsController.prototype, "remove", null);
DoctorsController = __decorate([
    (0, common_1.Controller)('doctors'),
    __metadata("design:paramtypes", [doctors_service_1.DoctorsService])
], DoctorsController);
exports.DoctorsController = DoctorsController;
//# sourceMappingURL=doctors.controller.js.map