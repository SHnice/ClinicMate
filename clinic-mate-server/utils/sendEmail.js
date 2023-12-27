import nodemailer from 'nodemailer';
import path from 'path';

export const sendEmail = async (subject, message, send_to, sent_from) => {
    console.log('email',process.env.EMAIL_HOST,process.env.EMAIL_USER,process.env.EMAIL_PASS)
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_HOST,

        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS
        }
      });

    const options = {
        from: sent_from,
        to: send_to,
        subject: subject,
        html: message,
        attachments: [
              {
                filename: 'hand.png', 
                path: 'utils/hand.png',
                cid: 'hand'
              },
              {
                filename: 'logo.png',
                path: 'utils/logo.png',
                cid:"logo"
              }
          ]
    }
    try {
        await transporter.sendMail(options);
        return true;
    } catch (error) {
      console.log(error)
        return false;
    }

};