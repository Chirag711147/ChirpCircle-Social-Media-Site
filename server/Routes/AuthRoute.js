import express from "express";
import{ loginuser, registerUser} from "../Controllers/Authcontroller.js";
const router = express.Router()


router.post('/register', registerUser)
router.post('/login', loginuser)


export default router