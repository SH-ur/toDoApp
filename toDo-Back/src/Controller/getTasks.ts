import { Task } from "../Entities/Task";

export const getTasks = async()=>{
    try {
        const theTask = await Task.find();
console.log( typeof theTask[0].id)
        if(Array.isArray(theTask) && theTask.length > 0) return theTask
        else return {message: 'No hay datos de tareas en la Base de datos'};
    } catch (error: any) {
        
        throw new Error(error?.message)
    }
}