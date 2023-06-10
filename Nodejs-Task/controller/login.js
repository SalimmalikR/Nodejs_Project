const users = require('../user_model/emp_info');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const error_response = require('../utils/error_response');
const customerror=require('../utils/customerr')

// Admin login with JWT Authorization
const login = async (req, res,next) => {
    const { email, password } = req.body;
    try {
        // Find the user with the given email
        const user = await users.findOne({ where: { email } });
        if (!user) {
            const err=new customerror(404,error_response.notfound);
            next(err);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const err=new customerror(401,error_response.wrongpassword);
            next(err);
        }

        if (user.emp_id === 1) {
            // If the user's emp_id is 1, generate a JWT token
            const token = jwt.sign({ emp_id: user.emp_id }, 'secretkey', { expiresIn: '1h' });
            res.status(200).json({
                status: 'success',
                message: 'Your token has been generated',
                data: { token }
            });
        }
        if(user.emp_id!==1){
            const token = jwt.sign({ emp_id: user.emp_id }, 'secretkey-user', { expiresIn: '1h' });
            res.status(200).json({
                status: 'success',
                message: 'Your token has been generated',
                data: { token }
            });
        }
    } catch (error) {
        const err=new customerror(500,error);
            next(err);
    }
};

module.exports = login;
