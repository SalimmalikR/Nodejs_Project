const express = require('express');

const router = express.Router();

//require

const userdata = require('../controller/user_readuser')

//jwt Middle ware require

const jwt=require('../middleware/user_jwt')

//routers

router.get('/userdata/:id',jwt,userdata)

module.exports = router;