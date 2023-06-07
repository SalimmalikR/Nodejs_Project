const jwt = require('jsonwebtoken');
const error_response = require('../utils/error_response')

function verifyToken(req, res, next) {
    const token =req.header('jwt');

    if (!token) {
        return res.status(401).json({
            status:error_response.failure,
            message:error_response.notoken
        });
    }
    try {
        const user = jwt.verify(token, 'secretkey')
        req.emp_id = user.emp_id;
        next();
    } catch (err) {
        return res.status(401).json({
            status:error_response.failure,
            message:error_response.invalidtoken
        });
    }
}

module.exports = verifyToken;
