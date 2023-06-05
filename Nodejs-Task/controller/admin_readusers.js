const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');

const readusers = async (req, res) => {
  try {
    const emp_id = req.params.id;

    if (emp_id === '1') {
      users = await emp_info.findAll({
        include: [
          { model: emp_qualification },
          { model: emp_address }
        ]
      });
      if (users.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(users);
    } else {
      res.status(403).json({ error: 'User cannot read the data' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error in fetching user details' });
  }
};

module.exports = readusers;
