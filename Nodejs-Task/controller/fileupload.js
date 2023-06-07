const empinfo = require('../user_model/emp_info');
const error_response = require('../utils/error_response');

const fileupdate = async (req, res) => {
  try {
    const id = req.params.id;
    const file = req.file

    // Find the user by the provided ID
    const user = await empinfo.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's fileupload field with the new file filename
    await user.update({ fileupload: file ? await file.filename : empinfo.fileupload, });

    // Return a success response
    res.status(200).json({
      status: 'success',
      message: 'File updated successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status:error_response.failure,
      message:error_response.servererror
    });
  }
};

module.exports = fileupdate;
