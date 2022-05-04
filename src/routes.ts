import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router()


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58df4c74eb5822",
      pass: "ecf382181a082b"
    }
  });


routes.post('/feedbacks', async (req, res) => {
    //tirando os valores do body
    const { type, comment, screenshot } = req.body;

    //comando para fazer um insert dentro do bd: prism.nomedoDb.create({}) dentro do create, existe 2 tipos de opção, data ou select.
    //data passa os dados que serão criados e o select retorna os dados que serão criados.
        const feedback = 

       await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "João Siqueira <joaopfsiqueiraa@gmail.com>",
            subject: "Novo feedback",
            html: [
                `<div style="font-family: sans-serif; font-size: 16px color: #111";> `,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
        
        return res.status(201).json({data : feedback});
    }) 