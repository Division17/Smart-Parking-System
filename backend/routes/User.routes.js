import express from 'express';
import UserRegister from '../controllers/userRegister.controller.js';
import { UserLogIn, UserLogOut } from '../controllers/UserLogin-out.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router();

router.post('/signup', UserRegister)
router.post('/login', UserLogIn)
router.post('/logout', UserLogOut)
router.get('/profile', isAuthenticated, (req, res)=>{
     res.status(200).json({
        message:`Welcome back`
     })
} )

export default router;