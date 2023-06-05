const emp_info = require('../user_model/emp_info');
const bcrypt = require('bcrypt');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');

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

    const upload = req.file;
    console.log(upload);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await emp_info.create({
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
      fileupload: upload.filename,
      mobile_no,
      FatherName,
      MotherName,
      Father_occupation,
      Mother_Occupation
    });

    await emp_qualification.create({
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
      userId:createdUser.emp_id,
    });

    await emp_address.create({
      // Employee address fields
      DoorNo,
      street_name,
      Area,
      city,
      state,
      pincode,
      country,
      userId:createdUser.emp_id,
    });

    res.status(200).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = signup;
