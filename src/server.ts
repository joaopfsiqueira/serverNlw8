import express from 'express';
import { prisma } from './prisma';


const app = express();

//avisando o express que vamos receber um json
app.use(express.json())


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

        return res.status(201).json({data : feedback});
    }) 

app.listen(3333, () => {
        console.log('http://localhost:3333')
    })