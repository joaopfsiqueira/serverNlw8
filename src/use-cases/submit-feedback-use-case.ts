import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedbackUserCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async execute(request:SubmitFeedbackUserCaseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({

                type,
                comment,
                screenshot,
               
        })
        
    }
}