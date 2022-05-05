import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    //tirando os valores do body
    const { type, comment, screenshot } = req.body;

    //comando para fazer um insert dentro do bd: prism.nomedoDb.create({}) dentro do create, existe 2 tipos de opção, data ou select.
    //data passa os dados que serão criados e o select retorna os dados que serão criados.

        const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
        const nodemailerMailAdapter = new NodemailerMailAdapter()
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailerMailAdapter
        )

        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        });

        
        return res.status(201).send()
    }) 