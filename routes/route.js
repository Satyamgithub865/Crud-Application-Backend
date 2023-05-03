import express from "express";
import { addUser, getAllUsers, editUser, getUser, deleteUser } from "../controller/user-controller.js";

const router = express.Router();

router.post('/add', addUser);
router.get('/all', getAllUsers);
router.put('/edit/:id', editUser);
router.get('/getUser/:id', getUser);
router.delete('/delete/:id', deleteUser);

export default router;