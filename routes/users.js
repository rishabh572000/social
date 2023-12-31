const router = require('express').Router()
const User = require('../models/User')

// update user
router.put("/updateUser/:id", async(req, res)=>{
    try{
        
        if(req.params.id || req.user.isAdmin){
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true }
            )
            const formateData = {
                status: 200,
                message:'Account has been updated successfully.',
                data:user
            }
            res.status(200).json(formateData)
        }
        else{
            return res.status(403).json('You can update only your account!')
        }
    }catch(err){
        res.send(500).json('something went wrong')
    }
})
// delete user
router.delete("/deleteUser/:id", async(req, res)=>{
    try{
    
        if(req.params.id || req.user.isAdmin){
             await User.deleteOne({_id:req.params.id})
             
            const formateData = {
                status: 200,
                message:'Account has been deleted successfully.',
            }
            res.status(200).json(formateData)
        }
        else{
            return res.status(403).json('You can deleted only your account!')
        }
    }catch(err){
        res.send(500).json('something went wrong')
    }
})
// get a user
router.get("/viewDetails/:id", async(req, res)=>{
    try{
       const user = await User.findById(req.params.id)
       if(user){
            const formateData = {
            status: 200,
            message:'User found successfully.',
            data:user
            }
            res.status(200).json(formateData)
       }
       else{
        const formateData = {
         status: 200,
         message:'User not found.',
         data:user
        }
        res.status(200).json(formateData)
       }
    }catch(err){
        res.status(500).json('something went wrong')
    }
})
// follow a user 
router.put("/followUser/:id", async(req, res)=>{
    try{
        if(req.params.id !== req.body.followId){
             await User.findByIdAndUpdate(req.params.id, {
                $set:{following: req.body.followId}
            }, { new: true }
            )
             await User.findByIdAndUpdate(req.body.followId, {
                $set:{followers: req.params.id}
            }, { new: true }
            )
            
            const formateData = {
                status: 200,
                message:'Account follow successfully.',
            }
            res.status(200).json(formateData)
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