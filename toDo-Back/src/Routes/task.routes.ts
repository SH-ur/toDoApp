import { Router } from "express";
import { createTasks } from "../Controller/createTasks";

const router = Router();

router.post('/tasking', async(req, res)=>{
    try{
        const {title, description}= req.body;
        
            const tasks = await createTasks({title, description})
if(tasks != undefined){
    res.status(200).json(tasks);
}
        
        }catch(error){
        res.status(400).json({error: error});
        console.log('Fallo en la ruta');
        }
});

export default router;