import { UUID } from "crypto";

interface Task{
    id?: UUID,
    title: string,
    description: string
    accomplished?: boolean
}
export type createTask = {title: string | undefined | null, description: string| undefined | null}

export type askedTask = Array<Task> | { message: string}| {error: any} | {};

export default Task
export type taskUpdate = Array<Task> | String | undefined;
export type infoForUpdate =  {title?: string, description?: string} ;
export type megaString = `${'string'}-${'string'}-${'string'}-${'string'}-${'string'}`;