import { User } from '../models/User.model.js';

const getUserDetail = async (req, res) => {
  const { id } = req.params; // Assuming you fetch user by email

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default getUserByEmail;
