"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const database = () => {
    if (process.env.NODE_ENV === 'production') {
        return `${process.env.DB}`;
    }
    else {
        return `${process.env.DB_LOCAL}`;
    }
};
exports.database = database;
//# sourceMappingURL=dbconnection.js.map