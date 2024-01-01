
import { Task } from "../Entities/Task";
import { validatingUUID } from "../helpers/uuidThings";

export const delTasks = async (idToDelete: string) => {
  try {
    if (!idToDelete) throw new Error("No se envío el dato para la eliminación");

    const verifyExistence = await Task.findOneBy({ id: idToDelete });
    if (!verifyExistence)
      throw new Error(
        "El id solicitado para eliminación no coincide con ninguno de la Base de Datos."
      );
    else {
      if (validatingUUID.test(idToDelete)) {
        const result = await Task.delete({id: idToDelete});
console.log(result);
        result.affected===0? 'NOT OKIDOKI': 'OK';
      }
    }
  } catch (error: any) {
    throw new Error(error?.message)
  }
};
