"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "abdoulayeleom10@gmail.com",
      pass: "rxslvxxheueeghae",
    },
  });

  module.exports = transporter;
  



