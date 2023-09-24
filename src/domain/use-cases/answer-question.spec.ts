import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionID: '1',
    instructorID: '1',
    content: 'Nova resposta'
  });

  expect(answer.content).toEqual('Nova resposta');
})