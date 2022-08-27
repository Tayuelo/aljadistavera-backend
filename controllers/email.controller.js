const { response } = require("express");
const nodemailer = require("nodemailer");

const main = async (req, res) => {
  const { email, subject, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const options = {
    from: "atavera@unac.edu.co",
    to: "tayuelo26@gmail.com",
    subject,
    html: `
        <p>Message from: ${ email }</p> <br>
        ${ message }
    `,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
        return console.log(err)
    }
    res.status(200).send({ msg: 'Mail sent', message_id: info});
 });
};

module.exports = {
  main,
};
