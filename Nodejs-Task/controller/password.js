const crypto = require('crypto');
const customerror = require('../utils/customerr');
const emp_info = require('../user_model/emp_info');
const sendEmail = require('../utils/sendmail');
require('dotenv').config();
const bcrypt = require('bcrypt');

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await emp_info.findOne({ where: { email } });

        if (!user) {
            const err = new customerror(404, 'We could not find the user with the given email');
            return next(err);
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        await user.update({ passwordresettoken: resetToken });

        const resetUrl = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`;
        const yourCompanyName = "NovaStrid"

        const emailSubject = 'Password Reset Request';
        const emailBody = `
  <p>Hello ${user.firstName},</p>
  <p>We have received a password reset request for your account. To reset your password, please click on the button below:</p>
  <p><a href="${resetUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none;">Reset Password</a></p>
  <p>If you did not initiate this request or if you believe this is an error, please ignore this email. Your account will remain secure.</p>
  <p>Please note that this password reset link is valid for 1 hour. After that, you will need to initiate the reset process again if needed.</p>
  <p>Thank you for using our service.</p>
  <p>Best regards,<br>${yourCompanyName}</p>
`;
        try {
            await sendEmail({
                Email: user.email,
                subject: emailSubject,
                html: emailBody
            });

            res.status(200).json({
                status: 'success',
                message: 'Password reset link sent to the user email',
                token: resetToken
            });
        } catch (error) {
            const err = new customerror(500, error);
            next(err);
        }
    } catch (error) {
        const err = new customerror(500, error + 'internal server error');
        next(err);
    }
};


const resetPassword = async (req, res, next) => {
    try {
        const token = req.params.token;

        const user = await emp_info.findOne({ where: { passwordresettoken: token } });

        if (!user) {
            const err = new customerror(500, 'Invalid Token! Please provide a valid token');
            return next(err);
        }

        user.password = req.body.password ? await bcrypt.hash(req.body.password, 10) : user.password;;

        user.passwordresettoken = null;

        console.log(user);

        user.save();

        res.status(200).send({
            statuscode: 200,
            status: 'success',
            message: 'Password reset successfully!'
        });
    } catch (error) {
        const err = new customerror(500, error);
        next(err);
    }
};


module.exports = {
    forgotPassword,
    resetPassword
};
