//describe coloca um nome para o feedback, que sempre recebe uma function callback

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//it significa "deveria", ai colocamos um nome ao it, retornamos uma function callback e dentro dele o test.
describe('SubmitFeedback', () => {
    it('Shoud be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() => {}},
            { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64, 323276832gdsf67sd78fds687f67s8d',
        })).resolves.not.toThrow();
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
    })

});


