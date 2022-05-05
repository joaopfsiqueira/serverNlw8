//describe coloca um nome para o feedback, que sempre recebe uma function callback

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//it significa "deveria", ai colocamos um nome ao it, retornamos uma function callback e dentro dele o test.
describe('SubmitFeedback', () => {
    it('Shoud be able to submit a feedback', () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() => {}},
            { sendMail: async () => {}}
        )
    })
});