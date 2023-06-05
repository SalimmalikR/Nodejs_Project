const Joi = require('joi');

const empInfoSchema = Joi.object({
    //employees information verification
    firstName: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('First Name'),
    lastName: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('Last Name'),
    email: Joi.string().email().pattern(/^[^\s@]+@(gmail\.com|yahoo\.com)$/).label('Email'),
    password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,30}$/).label('Password'),
    age: Joi.number().integer().min(21).max(60).label('Age'),
    gender: Joi.string().valid('male', 'female', 'others').label('Gender'),
    skills: Joi.string().trim().allow('').label('Role'),
    experience: Joi.number().integer().min(1).max(40).label('Experience'),
    salary: Joi.number().min(10000).max(2000000).label('Salary'),
    AadharNo: Joi.string().pattern(/^\d{12}$/).label('Aadhar Number'),
    fileupload: Joi.string().label('File Upload'),
    mobile_no: Joi.string().pattern(/^\d{10}$/).label('Mobile Number'),
    FatherName: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('Father\'s Name'),
    MotherName: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('Mother\'s Name'),
    Father_occupation: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('Father\'s Occupation'),
    Mother_Occupation: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(25).trim().allow('').label('Mother\'s Occupation'),

    //employees qualification verification
    college_name: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('Education'),
    degree: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('Degree'),
    stream: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('Stream'),
    cgpa: Joi.number().min(1).max(10).label('CGPA'),
    location: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('City'),
    HSC_School_name: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('HSC School Name'),
    HSC_Percentege: Joi.number().min(1).max(100).label('HSC Percentage'),
    SSLC_School_name: Joi.string().pattern(/^[A-Za-z]+$/).min(3).max(50).trim().allow('').label('SSLC School Name'),
    SSLC_Percentege: Joi.number().min(1).max(100).label('SSLC Percentage'),

    //employees addresses verification
    DoorNo: Joi.string().label('Door No'),
    street_name: Joi.string().min(3).max(50).trim().allow('').label('Street Name'),
    Area: Joi.string().min(3).max(50).trim().allow('').label('Area'),
    city: Joi.string().min(3).max(50).trim().allow('').label('City'),
    state: Joi.string().min(3).max(50).trim().allow('').label('State'),
    pincode: Joi.string().pattern(/^\d{6}$/).label('Pincode'),
    country: Joi.string().min(3).max(50).trim().allow('').label('Country'),
});


function validate(req, res, next) {
    console.log("Validating user information...");
    const { error: empInfoError } = empInfoSchema.validate(req.body);

    if (empInfoError) {
        console.error("Error validating employee information:", empInfoError);
        return res.status(400).json({ error: empInfoError.details[0].message });
    }

    next();
}

module.exports = validate;
