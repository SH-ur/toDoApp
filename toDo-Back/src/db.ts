require('dotenv').config();

import {DataSource} from 'typeorm';
import { Task } from './Entities/Task';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
username: 'postgres',
password: 'OPformat',
port: 3042,
database: 'todolist',
entities: [Task],
logging: true,
synchronize: true
})
