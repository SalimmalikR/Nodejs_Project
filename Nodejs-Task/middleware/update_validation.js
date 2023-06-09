const Joi = require('joi');
const CustomError = require('../utils/customerr');

const empInfoSchema = Joi.object({

    //employees information verification
    firstName: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow(' ').messages({
      'any.required': 'First name is required',
      'string.pattern.base': 'First name must only contain letters and spaces',
      'string.empty': 'First name must not be empty',
      'string.min': 'First name must have at least {#limit} characters',
      'string.max': 'First name must have at most {#limit} characters',
    }),
    lastName: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow('').messages({
      'any.required': 'Last name is required',
      'string.pattern.base': 'Last name must only contain letters and spaces',
      'string.empty': 'Last name must not be empty',
      'string.min': 'Last name must have at least {#limit} characters',
      'string.max': 'Last name must have at most {#limit} characters',
    }),
    email: Joi.string().email().pattern(/^[^\s@]+@(gmail\.com|yahoo\.com)$/).messages({
      'string.email': 'Email must be a valid email address',
      'string.pattern.base': 'Email must be a valid Gmail or Yahoo email address',
    }),
    password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,30}$/).messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    }),
    age: Joi.number().integer().min(21).max(60).messages({
      'number.base': 'Age must be a number',
      'number.integer': 'Age must be an integer',
      'number.min': 'Age must be at least 21',
      'number.max': 'Age must not exceed 60',
      'any.required': 'Age is required',
    }),
    gender: Joi.string().valid('male', 'female', 'others').messages({
      'any.only': 'Gender must be either "male", "female", or "others"',
      'any.required': 'Gender is required',
    }),
    // skills: Joi.array().items(Joi.string()).messages({
    //   'string.base': 'Skills must be a string',
    //   'any.required': 'Skills is required',
    // }),
    skills: Joi.array().items(Joi.string()).min(1).unique().messages({
      'array.base': 'Skills must be an array.',
      'array.min': 'At least one skill is required.',
      'array.unique': 'Skills must be unique.',
      'string.base': 'Each skill must be a string.',
    }),
    experience: Joi.number().integer().min(1).max(40).messages({
      'number.base': 'Experience must be a number',
      'number.integer': 'Experience must be an integer',
      'number.min': 'Experience must be at least 1',
      'number.max': 'Experience must not exceed 40',
      'any.required': 'Experience is required',
    }),
    salary: Joi.number().min(10000).max(2000000).messages({
      'number.base': 'Salary must be a number',
      'number.min': 'Salary must be at least 10000',
      'number.max': 'Salary must not exceed 2000000',
      'any.required': 'Salary is required',
    }),
    AadharNo: Joi.string().pattern(/^\d{12}$/).messages({
      'string.pattern.base': 'Aadhar Number must be a 12-digit number',
      'any.required': 'Aadhar Number is required',
    }),
    // fileupload: Joi.string().messages({
    //   'any.required': 'File Upload is required',
    // }),
    mobile_no: Joi.string().pattern(/^\d{10}$/).messages({
      'string.pattern.base': 'Mobile Number must be a 10-digit number',
      'any.required': 'Mobile Number is required',
    }),
    FatherName: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow('').messages({
      'string.pattern.base': "Father's Name must contain only letters and spaces",
      'string.min': "Father's Name must be at least 3 characters long",
      'string.max': "Father's Name must not exceed 25 characters",
      'any.required': "Father's Name is required",
    }),
    MotherName: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow('').messages({
      'string.pattern.base': "Mother's Name must contain only letters and spaces",
      'string.min': "Mother's Name must be at least 3 characters long",
      'string.max': "Mother's Name must not exceed 25 characters",
      'any.required': "Mother's Name is required",
    }),
    Father_occupation: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow('').messages({
      'string.pattern.base': "Father's Occupation must contain only letters and spaces",
      'string.min': "Father's Occupation must be at least 3 characters long",
      'string.max': "Father's Occupation must not exceed 25 characters",
      'any.required': "Father's Occupation is required",
    }),
    Mother_Occupation: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(25).trim().allow('').messages({
      'string.pattern.base': "Mother's Occupation must contain only letters and spaces",
      'string.min': "Mother's Occupation must be at least 3 characters long",
      'string.max': "Mother's Occupation must not exceed 25 characters",
      'any.required': "Mother's Occupation is required",
    }),
  
    //employees qualification verification
    college_name: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(50).trim().allow('').label('Education').messages({
      'string.pattern.base': 'Education must contain only letters and spaces',
      'string.min': 'Education must be at least 3 characters long',
      'string.max': 'Education must not exceed 50 characters',
      'any.required': 'Education is required',
    }),
  
    degree: Joi.string().pattern(/^[A-Za-z\s]+$/).min(1).max(50).trim().allow('').label('Degree').messages({
      'string.pattern.base': 'Degree must contain only letters and spaces',
      'string.min': 'Degree must be at least 1 character long',
      'string.max': 'Degree must not exceed 50 characters',
      'any.required': 'Degree is required',
    }),
  
    stream: Joi.string().pattern(/^[A-Za-z\s]+$/).min(1).max(50).trim().allow('').label('Stream').messages({
      'string.pattern.base': 'Stream must contain only letters and spaces',
      'string.min': 'Stream must be at least 1 character long',
      'string.max': 'Stream must not exceed 50 characters',
      'any.required': 'Stream is required',
    }),
  
    cgpa: Joi.number().min(1).max(10).label('CGPA').messages({
      'number.base': 'CGPA must be a number',
      'number.min': 'CGPA must be at least 1',
      'number.max': 'CGPA must not exceed 10',
      'any.required': 'CGPA is required',
    }),
  
    location: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(50).trim().allow('').label('City').messages({
      'string.pattern.base': 'City must contain only letters and spaces',
      'string.min': 'City must be at least 3 characters long',
      'string.max': 'City must not exceed 50 characters',
      'any.required': 'City is required',
    }),
  
    HSC_School_name: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(50).trim().allow('').label('HSC School Name').messages({
      'string.pattern.base': 'HSC School Name must contain only letters and spaces',
      'string.min': 'HSC School Name must be at least 3 characters long',
      'string.max': 'HSC School Name must not exceed 50 characters',
      'any.required': 'HSC School Name is required',
    }),
  
    HSC_Percentege: Joi.number().min(1).max(100).label('HSC Percentage').messages({
      'number.base': 'HSC Percentage must be a number',
      'number.min': 'HSC Percentage must be at least 1',
      'number.max': 'HSC Percentage must not exceed 100',
      'any.required': 'HSC Percentage is required',
    }),
  
    SSLC_School_name: Joi.string().pattern(/^[A-Za-z\s]+$/).min(3).max(50).trim().allow('').label('SSLC School Name').messages({
      'string.pattern.base': 'SSLC School Name must contain only letters and spaces',
      'string.min': 'SSLC School Name must be at least 3 characters long',
      'string.max': 'SSLC School Name must not exceed 50 characters',
      'any.required': 'SSLC School Name is required',
    }),
  
    SSLC_Percentege: Joi.number().min(1).max(100).label('SSLC Percentage').messages({
      'number.base': 'SSLC Percentage must be a number',
      'number.min': 'SSLC Percentage must be at least 1',
      'number.max': 'SSLC Percentage must not exceed 100',
      'any.required': 'SSLC Percentage is required',
    }),
  
  
    //employees addresses verification
    DoorNo: Joi.string().label('Door No').messages({
      'any.required': 'Door No is required',
    }),
  
    street_name: Joi.string().min(3).max(50).trim().allow('').label('Street Name').messages({
      'string.min': 'Street Name must be at least 3 characters long',
      'string.max': 'Street Name must not exceed 50 characters',
      'any.required': 'Street Name is required',
    }),
  
    Area: Joi.string().min(3).max(50).trim().allow('').label('Area').messages({
      'string.min': 'Area must be at least 3 characters long',
      'string.max': 'Area must not exceed 50 characters',
      'any.required': 'Area is required',
    }),
  
    city: Joi.string().min(3).max(50).trim().allow('').label('City').messages({
      'string.min': 'City must be at least 3 characters long',
      'string.max': 'City must not exceed 50 characters',
      'any.required': 'City is required',
    }),
  
    state: Joi.string().min(3).max(50).trim().allow('').label('State').messages({
      'string.min': 'State must be at least 3 characters long',
      'string.max': 'State must not exceed 50 characters',
      'any.required': 'State is required',
    }),
  
    pincode: Joi.string().pattern(/^\d{6}$/).label('Pincode').messages({
      'string.pattern.base': 'Pincode must be a 6-digit number',
      'any.required': 'Pincode is required',
    }),
  
    country: Joi.string().min(3).max(50).valid('India', 'USA', 'UK').trim().allow('').label('Country').messages({
      'string.min': 'Country must be at least 3 characters long',
      'string.max': 'Country must not exceed 50 characters',
      'any.required': 'Country is required',
      'any.only': 'Invalid country. Allowed values are: India, USA, UK',
    }),
  
  })


function validate(req, res, next) {
    console.log("Validating user information...");
    const { error: empInfoError } = empInfoSchema.validate(req.body);

    if (empInfoError) {
        console.error("Error validating employee information:", empInfoError);
        // return res.status(400).json({ error: empInfoError.details[0].message });
        const err = new CustomError(400, empInfoError.details[0].message);
    next(err);
    }

    next();
}

module.exports = validate;
