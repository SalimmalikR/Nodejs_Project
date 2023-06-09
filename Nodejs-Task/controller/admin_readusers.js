const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response');
const customerror=require('../utils/customerr')

const readusers = async (req, res, next) => {
  try {
    users = await emp_info.findAll({
      include: [
        { model: emp_qualification },
        { model: emp_address }
      ]
    });
    if (users.length === 0) {
      const err = new customerror(404,error_response.notfound);
      next(err);
    }
    res.status(200).json({
      status: 'success',
      message: 'User information fetched successfully',
      data: { users }
    });
  } catch (error) {
    const err = new customerror(500,error_response.fetcherror);
    next(err);
  }
};

module.exports = readusers;
