const jwt = require('jsonwebtoken');
const error_response = require('../utils/error_response')
const customerror=require('../utils/customerr')

function verifyToken(req, res, next) {
    const token = req.header('jwt');

    if (!token) {
        const err = new customerror(401,error_response.notoken);
        next(err);
    }
    try {
        const user = jwt.verify(token, 'secretkey')
        req.emp_id = user.emp_id;
        next();
    } catch (error) {
        const err = new customerror(401,error_response.invalidtoken);
        next(err);
    }
}

module.exports = verifyToken;
