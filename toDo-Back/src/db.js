"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const { POSTGRES_PASS } = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: POSTGRES_PASS,
    port: 5432,
    database: 'todolist',
    entities: [],
    logging: true
});
