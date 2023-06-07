const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');

const readusers = async (req, res) => {
  try {
      users = await emp_info.findAll({
        include: [
          { model: emp_qualification },
          { model: emp_address }
        ]
      });
      if (users.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({
        status:'success',
        message:'User information fetched successfully',
        data:{users}
      });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error in fetching user details' });
  }
};

module.exports = readusers;
