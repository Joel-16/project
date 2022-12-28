"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ValidationMiddleware = class ValidationMiddleware {
    use(req, res, next) {
        const { phoneNumber, password, firstname, lastname, email } = req.body;
        const errorsValidation = [];
        const reg = /^0(7|8|9)(0|1)\d{8}$/;
        const no = /^\d{4}$/;
        if (typeof email != 'string') {
            errorsValidation.push({ email: 'Not a valid email format' });
        }
        if (typeof password != 'string') {
            errorsValidation.push({ firstname: 'firstname is required' });
        }
        if (errorsValidation.length !== 0) {
            res.status(common_1.HttpStatus.UNPROCESSABLE_ENTITY).json(errorsValidation);
        }
        next();
    }
};
ValidationMiddleware = __decorate([
    (0, common_1.Injectable)()
], ValidationMiddleware);
exports.ValidationMiddleware = ValidationMiddleware;
//# sourceMappingURL=registration.js.map