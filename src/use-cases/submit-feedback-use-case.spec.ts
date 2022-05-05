//describe coloca um nome para o feedback, que sempre recebe uma function callback

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


//criando uma função espiã, que não tem funcionalidade nenhuma, mas nos permite saber quando essa função foi chamada ou não.
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

//it significa "deveria", ai colocamos um nome ao it, retornamos uma function callback e dentro dele o test.
describe('SubmitFeedback', () => {
    it('Shoud be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: createFeedbackSpy},
            { sendMail: sendMailSpy}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64, 323276832gdsf67sd78fds687f67s8d',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalledWith();
        expect(sendMailSpy).toHaveBeenCalledWith();
    });

    it('Shoud not be able to submit a feedback without type', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() => {}},
            { sendMail: async () => {}}
        )
    
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64, 323276832gdsf67sd78fds687f67s8d',
        })).rejects.toThrow();
    });


    it('Shoud not be able to submit a feedback without a comment', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() => {}},
            { sendMail: async () => {}}
        )
    
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, 323276832gdsf67sd78fds687f67s8d',
        })).rejects.toThrow();
    });


    it('Shoud not be able to submit a feedback with an invalid screenshot', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() => {}},
            { sendMail: async () => {}}
        )
    
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Ta tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });

});


