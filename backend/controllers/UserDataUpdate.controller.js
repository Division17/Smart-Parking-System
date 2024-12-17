import { User } from "../models/User.model.js";

const UserDataUpdate = async (req, res) => {

    const { name, number, email, bio, location, profession } = req.body;
    const { id } = req.params
    if (!name ||
        !number ||
        !email ||
        name == "" ||
        number == "" ||
        email == "" 
    ){
        return res.status(400).json({
            message: "All Fields are required",
            success: false,
        });
    }

    const updateData = {
        name,
        number,
        email,
        bio,
        location,
        profession
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

export default UserDataUpdate;