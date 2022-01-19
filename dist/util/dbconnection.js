"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
var a;
if (process.env.NODE_ENV === 'production') {
    a = {
        type: 'postgres',
        autoLoadEntities: true,
        entities: ['dist/**/*.entities{.ts,.js}'],
        url: `${process.env.DATABASE_URL}`,
        ssl: {
            rejectUnauthorized: false
        },
        synchronize: true
    };
}
else {
    a = {
        type: 'postgres',
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "5432",
        database: "project",
        autoLoadEntities: true,
        entities: ['dist/**/*.entities{.ts,.js}'],
        synchronize: true
    };
}
exports.database = a;
//# sourceMappingURL=dbconnection.js.map