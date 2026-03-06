"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mysql',
    host: '8.130.131.133',
    port: 3308,
    username: 'root',
    password: '123456',
    database: 'lowcode',
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=config.js.map