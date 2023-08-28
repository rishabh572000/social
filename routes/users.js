const router = require('express').Router()
const User = require('../models/User')

// update user
router.put("/:id", async(req, res)=>{
    try{
        
        if(req.body.userId===req.params.id || req.user.isAdmin){
            const user = User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            console.log(req.body, 'ronak')
            res.status(200).json('Account has been updated successfully')
        }
        else{
            return res.status(403).json('You can update only your account!')
        }
    }catch(err){
        res.status.send(500).json('something went wrong')
    }
})
// delete user
router.delete("/:id", async(req, res)=>{
    try{
    
        if(req.body.userId===req.params.id || req.user.isAdmin){
            const user = User.deleteOne(req.params.id)
            console.log(req.body, 'ronak')
            res.status(200).json('Account has been deleted successfully')
        }
        else{
            return res.status(403).json('You can deleted only your account!')
        }
    }catch(err){
        res.status.send(500).json('something went wrong')
    }
})
// get a user
router.get("/:id", async(req, res)=>{
    try{
       const user = await User.findById(req.params.id)
       res.status(200).json(user)
    }catch(err){
        res.status.send(500).json('something went wrong')
    }
})
// follow a user
// unfollow a user

module.exports = router