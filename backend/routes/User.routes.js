import express from 'express';
import UserRegister from '../controllers/userRegister.controller.js';
import { UserLogIn, UserLogOut } from '../controllers/UserLogin-out.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import GetUserData from '../controllers/GetUserData.controller.js'

const router = express.Router();

router.post('/signup', UserRegister)
router.post('/login', UserLogIn)
router.post('/logout', UserLogOut)
router.get('/check-auth', isAuthenticated, (req, res)=>{
     res.status(200).json({
        message:`Welcome back`
     })
} )

router.get('/user/:id', GetUserData);
 export default router;