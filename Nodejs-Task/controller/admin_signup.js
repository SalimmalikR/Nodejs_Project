const emp_address = require("../user_model/emp_address");
const emp_info = require("../user_model/emp_info");
const emp_qualification = require("../user_model/emp_qualification");
const customerror = require('../utils/customerr');
const error_response = require('../utils/error_response');
const bcrypt = require('bcrypt');

const signup = async (req, res, next) => {
  try {
    const {
      password,
      ...employeeFields
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const empinfo = await emp_info.create({
      // Employee information fields
      ...employeeFields,
      password: hashedPassword
    });

    const empqualification = await emp_qualification.create({
      // Employee Qualification fields
      ...employeeFields,
      userId: empinfo.emp_id
    });

    const empaddress = await emp_address.create({
      // Employee address fields
      ...employeeFields,
      userId: empinfo.emp_id
    });

    res.status(200).json({
      status: 'success',
      message: 'User created successfully',
      data: { empinfo, empqualification, empaddress }
    });
  } catch (error) {
    const err = new customerror(500, error_response.servererror);
    next(err);
  }
};

module.exports = signup;
