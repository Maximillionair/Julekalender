const express = require('express');
const router = require('express').Router();

// router.get('/', index);

router.get('/', (req, res)=>{
    res.render('index');
})

module.exports = router;