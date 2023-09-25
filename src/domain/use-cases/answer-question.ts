import { Answer } from "../entities/answer"
import { AnswerRepository } from "../repositories/answer-repository"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answerRepository: AnswerRepository,
  ) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      authorId: instructorId,
      questionId,
      content
    })

    await this.answerRepository.create(answer)

    return answer
  }
}