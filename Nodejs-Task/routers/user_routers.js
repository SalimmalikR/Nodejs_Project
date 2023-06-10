const express = require('express');

const router = express.Router();

//require

const userdata = require('../controller/user_readuser')

const validation = require('../middleware/update_validation')

const {forgotPassword,resetPassword}=require('../controller/password')

//jwt Middle ware require

const jwt=require('../middleware/user_jwt')

//routers

router.get('/userdata/:id',jwt,userdata)

router.post('/forgotPassword',forgotPassword)

router.patch('/resetPassword/:token',validation,resetPassword)

module.exports = router;