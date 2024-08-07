const express = require('express');
const user= require('../models/user');
// const {createUserHandler}   =require('../controllers/createUser')
const router= express.Router();

router.post('/createUser',async () => {
    const {name,email,phone,profession,password} = req.body;
    const User = await user.create(name,email,phone,password,profession);

    return res.status(200).json(
        {
            success:true,
            msg:"user created successfully!"
        }
    )

});

module.exports = router;