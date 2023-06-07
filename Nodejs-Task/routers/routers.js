const express = require('express');

const router = express.Router();

//require

const login = require('../controller/login')

const readusers=require('../controller/admin_readusers')

const signup=require('../controller/admin_signup')

const updateuser=require('../controller/admin_updateuser')

const deleteuser=require('../controller/admin_deleteuser')

const fileupdate=require('../controller/fileupload')

const fileupload=require('../middleware/fileupload')

// Middle ware validation

const validate = require('../middleware/validation')

const updatevalidation = require('../middleware/update_validation')

// middle ware jwt authorization

const jwt = require('../middleware/jwt');

//routers

router.post('/login',login)

router.get('/readusers',jwt,readusers)

router.put('/updateuser/:id',jwt,updatevalidation,updateuser)

router.post('/resisteruser',jwt,validate,signup)

router.delete('/deleteuser/:id',jwt,deleteuser)

router.put('/fileupload/:id',jwt,fileupload,fileupdate)

module.exports = router