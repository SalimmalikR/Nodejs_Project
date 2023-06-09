const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response');
const customerror = require('../utils/customerr')

const readusers = async (req, res, next) => {
  try {
    const emp_id = req.params.id;
    let users;

    if (emp_id !== '1') {
      users = await emp_info.findOne({
        where: { emp_id },
        include: [
          { model: emp_qualification },
          { model: emp_address }
        ]
      });
      res.status(200).json({
        status: 'success',
        message: 'user information fetched successfully',
        data: { users }
      });
    } else {
      const err = new customerror(403, error_response.noadmin);
      next(err);
    }
  } catch (error) {
    const err = new customerror(500, error_response.uploadfile);
    next(err);
  }
};

module.exports = readusers;
