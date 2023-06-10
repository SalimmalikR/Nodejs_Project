const nodemailer=require('nodemailer');

const sendEmail=async (option)=>{
 //CREATE TRANSPORTER

  const transporter=nodemailer.createTransport({
  host:process.env.EMAIL_HOST,
  port:process.env.EMAIL_PORT,
  auth:{
     user: process.env.EMAIL_USERNAME,
     pass:process.env.EMAIL_PASS
  }
  })

  const emailOptions={
    from: 'Cinefix mailto:support<support@cinefix.com>',
    to:option.Email,
    subject:option.subject,
    html:option.html

  }

  await transporter.sendMail(emailOptions);

}

module.exports=sendEmail;