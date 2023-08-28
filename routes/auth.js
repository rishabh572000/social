const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async(req, res)=>{
    const newUser =  new User({...req.body})
    try{
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
    
})

router.post('/login', async(req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email})

        !user && res.status(500).json('user not found')
        const validPassword = req.body.password ===user.password
        !validPassword && res.status(500).json('user not found')

        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json('user not found.')
    }
})

module.exports = router