
import { Task } from '../Entities/Task'
import { infoForUpdate } from './taskTypes'
import { validatingUUID } from '../helpers/uuidThings';

export const updateTasks = async(info: infoForUpdate, taskID: string)=> {
try {

    const {title, description} = info;
    
    if(validatingUUID.test(taskID)){
        const theActualTask = await Task.findOneBy({id: taskID})

        if(!title && !description) return 'There wasnt any info to update the task.'
        
        if(!theActualTask) return 'There is no Task with that ID, sorry.'
    
        const updating = await Task.update({id: taskID}, info)
    
        if(updating!= null) return updating;
    }
    else return{message:'Si estamos aquí ha de ser porque o el regex falló, o, la BD no acepta el type por ser string. La pucha'};
} catch (error: any) {
    console.log(error)
    throw new Error(error)
}
}