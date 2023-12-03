import { Router } from "express";
import { createTasks } from "../Controller/createTasks";
import { getTasks } from "../Controller/getTasks";

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
}).get('/searching', async(req, res)=>{
    try {
        const infoSearch = await getTasks();

        if(Array.isArray(infoSearch) && infoSearch.length >0){
            res.status(200).json(infoSearch)
        } else{
            res.status(200).json({info: infoSearch, message: "It wasnt an array"})
        }
    } catch (error) {
        res.status(400).json({error: error});
    }
})

export default router;