const empinfo = require('../user_model/emp_info');
const error_response = require('../utils/error_response');
const customerror=require('../utils/customerr')

const fileupdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const file = req.file

    // Find the user by the provided ID
    const user = await empinfo.findByPk(id);
    if (!user) {
      return res.status(404).json({
        status:error_response.failure,
        message:error_response.notfound
      });
      // const err = new customerror(404,error_response.notfound);
      // next(err);
    }
    if (!file) {
      return res.status(404).json({
        status: error_response.failure,
        message: error_response.uploadfile
      })
      // const err = new customerror(404,error_response.uploadfile);
      // next(err);
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
      status: error_response.failure,
      message: error_response.servererror
    });
    // const err = new customerror(500,error_response.servererror);
    // next(err);
  }
};

module.exports = fileupdate;
