const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token =req.header('jwt');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const user = jwt.verify(token, 'secretkey')
        req.emp_id = user.emp_id;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = verifyToken;
