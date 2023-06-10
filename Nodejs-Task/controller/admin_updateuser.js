const bcrypt = require('bcrypt');
const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response');
const customerror = require('../utils/customerr');

const updateuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      ...employeeFields
    } = req.body;

    const empinfo = await emp_info.findByPk(id);
    if (!empinfo) {
      const err = new customerror(404, error_response.notfound);
      return next(err);
    }
    if(req.body.password){
      const err = new customerror(404, error_response.updatepassword);
      return next(err);
    }

    const infoupdate = await empinfo.update(
      {
        ...employeeFields,
      },
      { where: { emp_id: id } }
    );

    // Update employee qualification
    const empqualification = await emp_qualification.findOne({ where: { userId: id } });
    if (!empqualification) {
      const err = new customerror(404, error_response.notfound);
      return next(err);
    }

    const qualificationupdate = await empqualification.update(
      {
        ...employeeFields
      },
      { where: { userId: id } }
    );

    // Update employee address
    const empaddress = await emp_address.findOne({ where: { userId: id } });
    if (!empaddress) {
      const err = new customerror(404, error_response.notfound);
      return next(err);
    }

    const addressupdate = await empaddress.update(
      {
        ...employeeFields
      },
      { where: { userId: id } }
    );

    res.status(201).json({
      status: 'success',
      message: 'User information updated successfully',
      data: { infoupdate, qualificationupdate, addressupdate }
    });
  } catch (error) {
    const err = new customerror(500, error_response.servererror);
    next(err);
  }
};

module.exports = updateuser;
