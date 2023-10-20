import { AnswersRepository } from "../repositories/answers-repository"
import { Question } from "../../enterprise/entities/question"
import { QuestionsRepository } from "../repositories/questions-repository"


interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface ChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionsRespository: QuestionsRepository,
    private answerRepository: AnswersRepository
    ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not a found.')
    }

    const question = await this.questionsRespository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new Error('Question not a found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.bestAnswerId = answer.id

    await this.questionsRespository.save(question)

    return {
      question,
    }
  }
}
