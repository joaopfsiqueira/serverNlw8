import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedbackUserCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request:SubmitFeedbackUserCaseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({

                type,
                comment,
                screenshot,
               
        })
        await this.mailAdapter.sendMail({
            subject: 'Feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px color: #111";> `,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}