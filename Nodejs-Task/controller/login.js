const users = require('../user_model/emp_info');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const error_response = require('../utils/error_response');

// Admin login with JWT Authorization
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user with the given email
        const user = await users.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({
                status: error_response.failure,
                message: error_response.notfound
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: error_response.failure,
                message: error_response.wrongpassword
            });
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
        console.error('Error during login:', error);
        res.status(500).json({
            status: error_response.failure,
            message: error_response.servererror
        });
    }
};

module.exports = login;
