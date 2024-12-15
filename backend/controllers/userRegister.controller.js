import { User } from '../models/User.model.js';
import bcrypt from 'bcryptjs';

const UserRegister = async (req, res) => {

    const { name, number, email, password, vehiclenumber } = req.body;
    if (
        !name ||
        !number ||
        !email ||
        !password ||
        !vehiclenumber ||
        name == "" ||
        number == "" ||
        email == "" ||
        password == "" ||
        vehiclenumber == ""

    ) {
        res.status(400).json({
            message: "All Fields are Required",
            success: false,
        })
    }

    const user = await User.findOne({ email })
    if (user) {
        res.status(400).json({
            message: "User Already Exists with following creditentials.",
            success: false,
        })
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);

    const newUser = new User({
        name,
        number,
        email,
        vehiclenumber,
        password: hashedPassword,

    })

    try {
        await newUser.save();
        res.status(200).json({
            message: "User registerd",
            success: true,
        })

    } catch (error) {
        console.log(error)
    }

}

export default UserRegister;