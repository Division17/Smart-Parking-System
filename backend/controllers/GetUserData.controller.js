import { User } from '../models/User.model.js';

const getUserByEmail = async (req, res) => {
  const { email } = req.query; // Assuming you fetch user by email

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: { id: user._id },
    });
  } catch (error) {
    console.error('Error fetching user:', error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default getUserByEmail;
