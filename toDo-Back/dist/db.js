"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require('dotenv').config();
const typeorm_1 = require("typeorm");
const Task_1 = require("./Entities/Task");
console.log('yolo');
console.log(process.env.POSTGRES_PASS);
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'OPformat',
    port: 5432,
    database: 'todolist',
    entities: [Task_1.Task],
    logging: true
});
