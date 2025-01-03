import jwt from 'jsonwebtoken';

const UserAuth = async (req, res) => {
  try {
    const token = req.cookies['token'];
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decoded.userId;

res.json({
    message:'Authorized',
    success: true,
    isAutherized: true
})
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export default UserAuth;
