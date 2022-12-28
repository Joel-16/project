"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express = require("express");
const fs_1 = require("fs");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    try {
        if (!(0, fs_1.existsSync)((0, path_1.join)(__dirname, 'uploads'))) {
            (0, fs_1.mkdir)((0, path_1.join)(__dirname, 'uploads'), { recursive: true }, (err) => {
                if (err) {
                    return console.error(err);
                }
            });
        }
    }
    catch (_a) {
        return;
    }
    app.use(express.static((0, path_1.join)(process.cwd(), 'dist', 'uploads')));
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map