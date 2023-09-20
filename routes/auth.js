const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async(req, res)=>{
    const newUser =  new User({...req.body})
    try{
        const user = await newUser.save()
        const formateData = {
            status: 200,
            message:'User registered successfully.',
            data:user
        }
        res.status(200).json(formateData)
    }catch(err){
        console.log(err)
    }
    
})

router.get('/login', async(req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email})

    

        !user && res.status(500).json('user not found')
        const validPassword = req.body.password ===user.password
        !validPassword && res.status(500).json('user not found')

        const formateData = {
            status: 200,
            message:'User login successfully.',
            data:user
        }

        res.status(200).json(formateData)
    }
    catch(err){
        res.status(500).json('user not found.')
    }
})

module.exports = router