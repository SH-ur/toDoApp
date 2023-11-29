//import {Request, Response} from 'express';
import { createTask } from "./taskTypes";
import { Task } from "../Entities/Task";
export const createTasks = async (taskInfo: createTask) => {
  try {
    //Destructuring
    const { title, description } = taskInfo;
    //Creamos la instancia con la entidad
    const tasks = new Task();

    //Condicional para asignar los datos y guardarlos en la Entidad
    if (title != null && description != null) {
      tasks.title = title;
      tasks.description = description;
      await tasks.save();
    }
console.log(tasks);
    //Esto es para verificar que se guardó en la base de datos
    const searching = Task.find({
      where: {
        title: `${title}`,
      },
    });
    
    if ((await searching).length > 0) {
      return searching;
    } 
  } catch (error: any) {
    console.log('La pucha, el error fue en controller: ' + error);
    throw new Error(error?.message);
    
  }
};
