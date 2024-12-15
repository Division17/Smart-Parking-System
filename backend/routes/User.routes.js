import express from 'express';
import UserRegister from '../controllers/userRegister.controller.js';
import { UserLogIn, UserLogOut } from '../controllers/UserLogin-out.controller.js'

const router = express.Router();

router.post('/auth/signup', UserRegister)
router.post('/auth/login', UserLogIn)
router.post('/auth/logout', UserLogOut)

export default router;