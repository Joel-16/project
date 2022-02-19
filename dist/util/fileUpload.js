"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageStorage = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const path_1 = require("path");
const validmime = ['image/png', 'image/jpg', 'image/jpeg'];
class imageStorage {
    static async customFileName(req, file, cb) {
        if (!validmime.includes(file.mimetype)) {
            throw new common_1.HttpException('file is not an image', common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        let name = await (0, crypto_1.randomBytes)(16).toString('hex');
        let fileExtension = "";
        if (file.mimetype.indexOf("jpeg") > -1) {
            fileExtension = "jpg";
        }
        else if (file.mimetype.indexOf("png") > -1) {
            fileExtension = "png";
        }
        else if (file.mimetype.indexOf("jpg") > -1) {
            fileExtension = "jpg";
        }
        else {
            throw new common_1.HttpException('file is not an image', common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        const originalName = file.originalname.split(".")[0];
        cb(null, name + "." + fileExtension);
    }
    static destinationPath(req, file, cb) {
        cb(null, (0, path_1.resolve)(__dirname, '..', 'uploads'));
    }
}
exports.imageStorage = imageStorage;
//# sourceMappingURL=fileUpload.js.map