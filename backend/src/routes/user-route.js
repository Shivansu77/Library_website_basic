const express=require('express');   
const router=express.Router();
const userController=require('../controllers/user-controller');

router.get('/', (req, res) => {
    res.json({ message: 'User route is working!' });
});

// Signup route
router.post("/signup", userController.signup);
// Login route
router.post("/login", userController.login);

module.exports=router;