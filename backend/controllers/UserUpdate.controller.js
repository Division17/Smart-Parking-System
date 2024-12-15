import { User } from "../models/User.model.js";

const UserUpdate = async (req, res) => {

    const { id, name, number, email, bio } = req.body;

    if (!name ||
        !number ||
        !email ||
        !id ||
        name == "" ||
        number == "" ||
        email == "" 
    ){
        return res.status(400).json({
            message: "All Fields are reqquired",
            success: false,
        });
    }

    const updateData = {
        name,
        number,
        email,
        bio,
    }

   try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true});
    if(!user){
        return res.status(404).json({
            message:"User not found",
            success: false,
        })
 }

 res.status(200).json({
    message: "User Updated Successfully",
    Success: true,
    user
 })

   } catch (error) {
    console.log(error); 
    res.status(500).json(
        { message: "Internal Server Error",
             success: false})
   }


}

export default UserUpdate;