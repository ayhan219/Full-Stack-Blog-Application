const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modules/User');
const router = express.Router();

router.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;

    try {
        const user = new User({
            username,
            email,
            password: await bcrypt.hash(password,10)
        })
        await user.save();
        res.status(201).json({msg:"User created"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

  module.exports = router;