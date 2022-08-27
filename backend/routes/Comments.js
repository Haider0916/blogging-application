const express = require('express');
const router = express.Router();

// to get all the comments
router.get('/',(req,res)=>{
    return res.send('<h1>In the all the comments</h1>')
})

// to post a new comment
router.post('/:id',(req,res)=>{
    return res.send(`<h1>Comments = GET : ${req.params.id}</h1>`)
})

module.exports = router;