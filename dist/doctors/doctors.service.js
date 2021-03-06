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
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("./entities/doctor.entity");
const fs_1 = require("fs");
let DoctorsService = class DoctorsService {
    constructor(doctor) {
        this.doctor = doctor;
    }
    async create(doctorDto) {
        let doctor = await this.doctor.save({
            email: doctorDto.email,
            password: doctorDto.password,
            salt: doctorDto.salt,
            address: doctorDto.address
        });
        return doctor;
    }
    async profile(profile, user) {
        let account = await this.doctor.findOne({ id: user.id });
        let link;
        if (account.image != null) {
            link = account.image.path;
            (0, fs_1.unlinkSync)(link);
        }
        account.address = profile.address;
        account.first_name = profile.first_name;
        account.last_name = profile.last_name;
        account.state = profile.state,
            account.lga = profile.lga;
        account.image = profile.image;
        await account.save();
        return account;
    }
    async findById(id) {
        return await this.doctor.findOne(id);
    }
    async findOne(email) {
        return await this.doctor.findOne({ email });
    }
    async findByLocation({ state, lg }) {
        return await this.doctor.find({ where: { state: state, lga: lg } });
    }
    async findAll() {
        return await this.doctor.find({});
    }
    async remove(id) {
        return await this.doctor.delete({ id: id });
    }
};
DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map