import express from 'express';
import UserRegister from '../controllers/userRegister.controller.js';
import { UserLogIn, UserLogOut } from '../controllers/UserLogin-out.controller.js'

const router = express.Router();

router.post('/signup', UserRegister)
router.post('/login', UserLogIn)
router.post('/logout', UserLogOut)

export default router;