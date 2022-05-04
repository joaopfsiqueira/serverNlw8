import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer'


const app = express();

//avisando o express que vamos receber um json
app.use(express.json())


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58df4c74eb5822",
      pass: "ecf382181a082b"
    }
  });


app.post('/feedbacks', async (req, res) => {
    //tirando os valores do body
    const { type, comment, screenshot } = req.body;

    //comando para fazer um insert dentro do bd: prism.nomedoDb.create({}) dentro do create, existe 2 tipos de opção, data ou select.
    //data passa os dados que serão criados e o select retorna os dados que serão criados.
        const feedback = await prisma.feedBack.create({
            data : {
                type,
                comment,
                screenshot,
            }     
        })

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

app.listen(3333, () => {
        console.log('http://localhost:3333')
    })