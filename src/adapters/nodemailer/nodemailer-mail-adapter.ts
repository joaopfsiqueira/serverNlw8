import nodemailer from 'nodemailer';
import {MailAdapter, SendMailData} from '../mail-adapter';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58df4c74eb5822",
      pass: "ecf382181a082b"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
            await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "João Siqueira <joaopfsiqueiraa@gmail.com>",
            subject,
            html: body,
        })
    }
}