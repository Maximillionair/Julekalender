const express = require('express');
const router = require('express').Router();
const User = require('../models/user');
const {
    insertUser
} = require('../controller/defaultcontrollers');


// router.get('/', index);

router.get('/', (req, res)=>{
    res.render('index');
})

router.post('/submit', insertUser);

module.exports = router;