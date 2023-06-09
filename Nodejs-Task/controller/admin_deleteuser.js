const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response');
const customerror=require('../utils/customerr')

const deleteuser = async (req, res,next) => {
  try {
    const id = req.params.id;

    const empinfo = await emp_info.findByPk(id);
    if (!empinfo) {
      const err = new customerror(404,error_response.notfound);
      next(err);
    }

    await emp_info.destroy({ where: { emp_id: id } });

    await emp_qualification.destroy({ where: { userId: id } });

    await emp_address.destroy({ where: { userId: id } });

    res.status(200).json({
      status: 'success',
      message: 'User Deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting user:', err);
    const err = new customerror(500,error_response.servererror);
    next(err);
  }
};

module.exports = deleteuser;
