const emp_info = require('../user_model/emp_info');
const bcrypt = require('bcrypt');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response')  

const signup = async (req, res) => {
  try {
    const {
      // Employee information
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      skills,
      experience,
      salary,
      AadharNo,
      mobile_no,
      FatherName,
      MotherName,
      Father_occupation,
      Mother_Occupation,
      // Employee Qualification fields
      college_name,
      degree,
      stream,
      cgpa,
      location,
      HSC_School_name,
      HSC_Percentege,
      SSLC_School_name,
      SSLC_Percentege,
      // Employee address fields
      DoorNo,
      street_name,
      Area,
      city,
      state,
      pincode,
      country
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const empinfo = await emp_info.create({
      // Employee information fields
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      skills,
      experience,
      salary,
      AadharNo,
      mobile_no,
      FatherName,
      MotherName,
      Father_occupation,
      Mother_Occupation
    });

    const empqualification= await emp_qualification.create({
      // Employee Qualification fields
      college_name,
      degree,
      stream,
      cgpa,
      location,
      HSC_School_name,
      HSC_Percentege,
      SSLC_School_name,
      SSLC_Percentege,
      userId:empinfo.emp_id,
    });

    const empaddress=await emp_address.create({
      // Employee address fields
      DoorNo,
      street_name,
      Area,
      city,
      state,
      pincode,
      country,
      userId:empinfo.emp_id,
    });

    res.status(200).json({ 
      status: 'success',
      message: 'User created successfully',
      data:{empinfo,empqualification,empaddress}
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({
      status:error_response.failure,
      message:error_response.servererror,
    });
  }
};

module.exports = signup;
