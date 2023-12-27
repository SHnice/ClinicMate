import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Assuming this code is in a module

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const handImagePath = path.join(currentDirPath, '../../public/images/hand.png');
const logoImagePath = path.join(currentDirPath, '../../public/images/logo.png');


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
                path: handImagePath,
                cid: 'hand'
              },
              {
                filename: 'logo.png',
                path: handImagePath,
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