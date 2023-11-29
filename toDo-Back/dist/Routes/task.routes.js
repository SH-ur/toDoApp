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
const express_1 = require("express");
const createTasks_1 = require("../Controller/createTasks");
const router = (0, express_1.Router)();
router.post('/tasking', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const tasks = yield (0, createTasks_1.createTasks)({ title, description });
        if (tasks != undefined) {
            res.status(200).json(tasks);
        }
    }
    catch (error) {
        res.status(400).json({ error: error });
        console.log('Fallo en la ruta');
    }
}));
exports.default = router;
