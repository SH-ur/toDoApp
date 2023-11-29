"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTasks = void 0;
const Task_1 = require("../Entities/Task");
const createTasks = (taskInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = taskInfo;
        const tasks = new Task_1.Task();
        console.log(tasks);
        if (title != null && description != null) {
            tasks.title = title;
            tasks.description = description;
            yield tasks.save();
        }
        const searching = Task_1.Task.find({
            where: {
                title: `${title}`,
            },
        });
        if ((yield searching).length > 0) {
            return searching;
        }
    }
    catch (error) {
        console.log('La pucha, el error fue en controller: ' + error);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.createTasks = createTasks;
