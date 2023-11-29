import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './Routes/task.routes';


const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(cors());

//Rutas aquí please :)
app.use('/tasks', router)

export default app;