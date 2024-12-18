import { User} from '../models/User.model.js'
import bcrypt from 'bcryptjs'

const UserRegister = async (req, res) => {
  const { name, email, number, password } = req.body;

  // Validate input
  if (!name || !email || !number || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check for duplicate email
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Check for duplicate phone number
    const existingUserByNumber = await User.findOne({ number });
    if (existingUserByNumber) {
      return res.status(400).json({ error: 'Phone number already exists' });
    }
    
    const hashedPassword = await bcrypt.hashSync( password , 10)
    // Create new user
    const newUser = new User({
      name,
      email,
      number,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default UserRegister;