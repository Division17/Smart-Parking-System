import { User } from '../models/User.model.js';
import jwt from 'jsonwebtoken';

export const UserLogIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (
            !email ||
            !password ||
            email == "" ||
            password == ""
        ) {
            return res.status(400).json({
                message: "Credentials missing",
                success: false,
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                message: "User doesn't exists, Please do register",
                success: false
            })
        }


        if (user.password !== password) {
          return res.status(400).json({
            message: "Credentials don't match.",
            success: false,
          });
        }

        const tokenData = {
            userId: user._id
        }

       const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1D' });

        const { password: pass, ...rest } = user._doc;

       return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, https: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.name}`,
            success: true,
            userId: user._id
        })
    } catch (error) {
        console.log(error)
    }
}


// logout

export const UserLogOut = async(req, res)=>{
    try {
        return res.status(200).cookie('token',"", { maxAge:0}).json({
            message: "Logged out successfully.",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

