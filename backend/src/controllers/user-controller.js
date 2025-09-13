const User = require('../models/User');
const userService = require('../services/user-service');
const InputValidationException = require('../exceptions/inputvalidationexception');

// Controller for user login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }
        
        // Use the service to login the user
        const result = await userService.loginUser(email, password);
        
        // Return the user and token
        res.status(200).json(result);
    } catch (error) {
        console.error('Login error:', error);
        return res.status(error instanceof InputValidationException ? 400 : 500)
            .json({ message: error.message });
    }
};

// Controller for user signup
exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, type } = req.body;
        
        // Basic validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'Please provide firstName, lastName, email and password' });
        }
        
        // Create user object
        const user = {
            firstName,
            lastName,
            email,
            password,
            type: type || 'STUDENT' // Default to STUDENT if not specified
        };
        
        // Use the existing service to add the user
        const result = await userService.addNewUser(user);
        
        // Return the user and token
        res.status(201).json(result);
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(error instanceof InputValidationException ? 400 : 500)
            .json({ message: error.message });
    }
};