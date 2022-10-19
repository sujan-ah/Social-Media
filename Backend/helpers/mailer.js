const nodemailer = require("nodemailer");

const { EMAIL } = process.env;

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: "axumvegsjzlzyyxu",
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "SUJAN Social Media Email Verification",
    html: `<div style="max-width:600px"><div style="border-bottom:1px solid #000;display:flex;padding-bottom:13px"><div><a style="display:inline-block" href="${url}" target="_blank"><img style="width:100px;margin-left:-20px" src="logo.png" alt=""></a></div><div style="display:flex;align-items:center;margin-left:0"><span style="font-family:sans-serif;display:inline-block">Confirm Email</span></div></div><p style="font-family:sans-serif">Hi ${name},</p><p style="font-family:sans-serif">Thanks for sign up in Facebook. Please verify your email by click confirm to continue</p><p style="font-family:sans-serif">Verification Link:</p><a style="display:inline-block;background:#0c88ef;padding:10px 33px;color:#fff;text-decoration:none;font-family:sans-serif" href="${url}">Confirm</a><p style="font-family:sans-serif;font-size:13px">From CIT ©️ Facebook. CIT Platforms, Inc., Attention: Community Support,1 Facebook Way, Menlo Park, CA 94025 This message was sent to shawon@gmail.com. To help keep your account secure, please don't forward this email.</p></div>`,
  };

  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
