import express from 'express';
import UserRegister from '../controllers/userRegister.controller.js';
import { UserLogIn, UserLogOut } from '../controllers/UserLogin-out.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import GetUserData from '../controllers/GetUserData.controller.js'
import UserDataUpdate from '../controllers/UserDataUpdate.controller.js';
import ParkingHistoryController from '../controllers/ParkingHistory.controller.js';

const router = express.Router();

router.post('/signup', UserRegister)
router.post('/login', UserLogIn)
router.post('/logout',UserLogOut)
router.get('/profile/:id', GetUserData);
router.put('/profile/:id', UserDataUpdate)
router.post('/book/:id', ParkingHistoryController)
router.get('/check-auth', isAuthenticated, (req, res) => {
   res.status(200).json({
      message: `Welcome back`
   })
})

export default router;