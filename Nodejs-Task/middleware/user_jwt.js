const jwt = require('jsonwebtoken');
const error_response = require('../utils/error_response');

function verifyToken(req, res, next) {
    const token = req.header('jwt');

    if (!token) {
        const err = new Error(error_response.notoken, 'failed', 401);
        next(err);
    }
    try {
        const user = jwt.verify(token, 'secretkey-user')
        req.emp_id = user.emp_id;
        next();
    } catch (error) {
        const err = new Error(error_response.invalidtoken, 'failed', 401);
        next(err);
    }
}

module.exports = verifyToken;
