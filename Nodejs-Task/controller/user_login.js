const users = require('../user_model/emp_info');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Admin login with JWT Authorization
const userlogin = async (req, res) => {
  const { emp_id, password } = req.body;
  try {
    // Find the user with the given ID
    const user = await users.findOne({ where: { emp_id } });
    if (!user) {
      return res.status(404).json({ error: 'Invalid User' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ emp_id: user.emp_id }, 'secretkey-user', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error({ message: 'Error during login:', error });
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = userlogin;
