import express from "express";
import { UnfollowUser, deleteUser, followUser, getUser, updateUser } from "../Controllers/UserControllers.js";

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnfollowUser)

export default router;