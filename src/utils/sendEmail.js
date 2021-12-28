import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import userModel from '../models';
import { jswtToken } from './jwtoken';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRI_API_KEY);

export const sendingVerificationEMail = (email) => {
    const token = jswtToken({email})
  const message={
    to: `${email}`,
    from:process.env.SENDER_EMAIL,
    subject:"Account verification!",
    html:`
    <h2>Dear ${email},</h2>
    <p> click here to verify your account ${process.env.HOST}/users/verify/users/${token} </p>
    `
  }
  return sgMail.send(message)
}
