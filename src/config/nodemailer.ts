import nodemailer from "nodemailer";

const email = process.env.SMTP_USERNAME;
const pass = process.env.SMTP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
