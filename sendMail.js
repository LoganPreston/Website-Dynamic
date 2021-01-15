const nodemailer = require("nodemailer");

exports.sendMail = function (emailInfo, callback) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, //ssl
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.USERNAME,
    to: process.env.DEST_EMAIL,
    subject: "Contact from Website",
    text: emailInfo.name + "\n" + emailInfo.email + "\n" + emailInfo.body,
  };

  transporter.sendMail(mailOptions, (err, msg) => {
    callback(err, msg);
  });
};
