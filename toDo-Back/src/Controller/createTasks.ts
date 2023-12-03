//import {Request, Response} from 'express';
import { createTask } from "./taskTypes";
import { Task } from "../Entities/Task";
export const createTasks = async (taskInfo: createTask) => {
  try {
    //Destructuring
    const { title, description } = taskInfo;
    //Creamos la instancia con la entidad
    const tasks = new Task();

    if(title == null || description == null) return 'No se puede hacer nada sin datos';

    const searching = Task.find({
      where: {
        title: `${title}`,
      },
    });

    //Comprobando replicas
    if((await searching).length >= 1) return 'Ya existe una Task así';
    //Condicional para asignar los datos y guardarlos en la Entidad
    if(typeof title == 'string' && typeof description == 'string'){
      tasks.title = title;
      tasks.description = description;
      await tasks.save();
    }
      
  
console.log(tasks);

      return searching;
    
  } catch (error: any) {
    console.log('La pucha, el error fue en controller: ' + error);
    throw new Error(error?.message);
    
  }
};
