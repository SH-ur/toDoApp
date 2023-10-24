import {DataSource} from 'typeorm';
const {POSTGRES_PASS} = process.env;

export  const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
username: 'postgres',
password: POSTGRES_PASS,
port: 5432,
database: 'todolist',
entities: [],
logging: true
})