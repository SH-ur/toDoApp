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