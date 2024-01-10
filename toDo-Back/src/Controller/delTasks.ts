
import { Task } from "../Entities/Task";
import { validatingUUID } from "../helpers/uuidThings";

export const delTasks = async (idToDelete: string) => {
  try {
    if (!idToDelete) throw new Error("No se envío el dato para la eliminación");

    const verifyExistence = await Task.findOneBy({ id: idToDelete });
    if (verifyExistence == null)
      return 'No hay datos que eliminar con ese id';
    else {
      if (validatingUUID.test(idToDelete)) {
        const result = await Task.delete({id: idToDelete});
console.log(result.affected);
        return `Task with the id ${idToDelete} was successfully eliminated. Have a nice day!`
      }
    }
  } catch (error: any) {
    throw new Error(error?.message)
  }
};
