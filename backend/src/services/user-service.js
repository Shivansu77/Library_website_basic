const User = require("../models/User");
const InputValidationException = require("../exceptions/inputvalidationexception");

const addNewUser = async (userData) => {
   try{
    // Check if user with this email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new InputValidationException('Email already in use');
    }
    
    // Create new user
    const user = new User(userData);
    await user.save();
    console.log(`User with id: ${user._id} created successfully`);
    
    // Generate authentication token
    const token = await user.generateToken();
    
    return { user, token };
   } catch(err) {
    console.error(`Error creating user: ${err.message}`);
    if (err instanceof InputValidationException) {
      throw err;
    }
    throw new InputValidationException(err.message);
   }
};

const loginUser = async (email, password) => {
  const user = await User.findEmailAndPasswordForAuth(email, password);
  console.log(`User with id: ${user._id} logged in successfully`);
  const token = await user.generateToken();
  return { user, token };
};  

module.exports = { addNewUser , loginUser};