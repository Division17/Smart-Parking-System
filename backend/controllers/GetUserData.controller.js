import { User } from '../models/User.model.js';

const GetUserData = async (req, res) => {
  const { id } = req.params; // Assuming you fetch user by email

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    
    User.find({}).populate({ path: 'ParkingHistory', model: 'ParkingHistory'}).then((list)=>{
      res.status(200).json(list)
    }).catch((err)=>
    {
      console.log(err)
    })

  } catch (error) {
    console.error('Error fetching user:', error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default GetUserData;
