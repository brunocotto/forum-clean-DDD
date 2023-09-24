import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
  instructorID: string;
  questionID: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorID, questionID, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content)

    return answer
  }
}
