const bcrypt = require('bcrypt');
const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');

const updateuser = async (req, res) => {
    try {
        const id = req.params.id;
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

        const file=req.file

        // Update employee information
        const empinfo = await emp_info.findByPk(id);
        if (!empinfo) {
            return res.status(404).json({ error: 'User not found in employee information' });
        }

        await emp_info.update(
            {
                // Employee information fields
                firstName,
                lastName,
                email,
                password:password ? await bcrypt.hash(password, 10) : empinfo.password ,
                age,
                gender,
                skills,
                experience,
                salary,
                AadharNo,
                fileupload: file ? await file.filename : empinfo.fileupload,
                mobile_no,
                FatherName,
                MotherName,
                Father_occupation,
                Mother_Occupation
            },
            { where: { emp_id: id } } 
        );

        // Update employee qualification
        const empqualification = await emp_qualification.findOne({ where: { userId: id } });
        if (!empqualification) {
            return res.status(404).json({ error: 'User not found in employee qualification' });
        }

        await emp_qualification.update(
            {
                // Employee Qualification fields
                college_name,
                degree,
                stream,
                cgpa,
                location,
                HSC_School_name,
                HSC_Percentege,
                SSLC_School_name,
                SSLC_Percentege
            },
            { where: { userId: id } } 
        );

        // Update employee address
        const empaddress = await emp_address.findOne({ where: { userId: id } });
        if (!empaddress) {
            return res.status(404).json({ error: 'User not found in employee address' });
        }

        await emp_address.update(
            {
                // Employee address fields
                DoorNo,
                street_name,
                Area,
                city,
                state,
                pincode,
                country
            },
            { where: { userId: id } }
        );

        // Send individual responses for each update operation
        res.status(201).json({ message: 'User information updated successfully' });
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = updateuser;
