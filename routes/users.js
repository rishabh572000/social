const router = require('express').Router()
const User = require('../models/User')

// update user
router.put("/:id", async(req, res)=>{
    try{
        
        if(req.params.id || req.user.isAdmin){
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true }
            )
            res.status(200).json('Account has been updated successfully')
        }
        else{
            return res.status(403).json('You can update only your account!')
        }
    }catch(err){
        res.send(500).json('something went wrong')
    }
})
// delete user
router.delete("/:id", async(req, res)=>{
    try{
    
        if(req.params.id || req.user.isAdmin){
             await User.deleteOne({_id:req.params.id})
            res.status(200).json('Account has been deleted successfully')
        }
        else{
            return res.status(403).json('You can deleted only your account!')
        }
    }catch(err){
        res.send(500).json('something went wrong')
        console.log('mohan', err)
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
router.put("/followUser/:id", async(req, res)=>{
    try{
        if(req.params.id !== req.body.followId){
            let follow=[], following=[];
            // console.log(req.params.id)
             await User.findByIdAndUpdate(req.params.id, {
                $set:{following: req.body.followId}
            }, { new: true }
            )
            await User.findByIdAndUpdate(req.body.followId, {
                $set:{followers: req.params.id}
            }, { new: true }
            )
            res.status(200).json('Account follow successfully')
        }else{
            res.send(200).json("You can't follow yourself")
        }
       const user = await User.findById(req.params.id)
       res.status(200).json(user)
    
    }catch(err){
        res.status(500).json('something went wrong')
    }
})
// unfollow a user

module.exports = router