const emp_info = require('../user_model/emp_info');
const emp_qualification = require('../user_model/emp_qualification');
const emp_address = require('../user_model/emp_address');

const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    
    const empinfo = await emp_info.findByPk(id);
    if (!empinfo) {
      return res.status(404).json({ error: 'User not found' });
    }

    await emp_info.destroy({ where: { emp_id: id } });

    await emp_qualification.destroy({ where: { userId: id } });

    await emp_address.destroy({ where: { userId: id } });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = deleteuser;
