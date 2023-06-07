const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');
const error_response = require('../utils/error_response');

const readusers = async (req, res) => {
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
        data: {users}
      });
    } else {
      return res.status(403).json({
        status:error_response.failure,
        message:error_response.noadmin
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status:error_response.failure,
      message:error_response.servererror
    });
  }
};

module.exports = readusers;
