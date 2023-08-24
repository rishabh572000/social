const router = require('express').Router()


router.get('/', (req, res)=>{
    res.send('hey this is rought')
})

module.exports = router