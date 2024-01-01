import { Router } from "express";
import { createTasks } from "../Controller/createTasks";
import { getTasks } from "../Controller/getTasks";
import { updateTasks } from "../Controller/updateTasks";
import { validatingUUID } from "../helpers/uuidThings";
import { delTasks } from "../Controller/delTasks";

const router = Router();

router
  .post("/tasking", async (req, res) => {
    try {
      const { title, description } = req.body;

      const tasks = await createTasks({ title, description });
      if (tasks != undefined) {
        res.status(200).json(tasks);
      }
    } catch (error) {
      res.status(400).json({ error: error });
      console.log("Fallo en la ruta");
    }
  })
  .get("/searching", async (req, res) => {
    try {
      const infoSearch = await getTasks();

      if (Array.isArray(infoSearch) && infoSearch.length > 0) {
        res.status(200).json(infoSearch);
      } else {
        res
          .status(200)
          .json({ info: infoSearch, message: "It wasnt an array" });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  })
  .put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      if (validatingUUID.test(id)) {
        if (id != null) {
          const updateTheTask = await updateTasks(req.body, id);
          if (updateTheTask != null) res.status(201).json(updateTheTask);
        } else
          return `Bueno, revisemos el id: typeof es ${typeof id} y el id sale como ${id}`;
      }
    } catch (error) {
      res.status(400).json(error);
    }
  })
  .delete("/obliterate/:id", async (req, res) => {
    try {
      const { id } = req.params;

      if (id !== null) {
        if (validatingUUID.test(id)) {
          const deleteTheTask = await delTasks(id);
          console.log(deleteTheTask); //Ok, esto cumple pero no devuelve nada
          res.status(204).json(`The task with the id ${id} was deleted`);
        } else
          res
            .status(400)
            .json("Sorry, the sent id its not UUID format, the BD may crash");
      } else
        res
          .status(400)
          .json("Empty Id, you must send one for the deleting proccess");
    } catch (error) {
      res.status(400).json(error);
    }
  });

export default router;
