export type Difficult = 'easy' | 'medium' | 'hard';
export type QuestionNumber = 5 | 10 | 20;
export type Time = 3 | 10 | 30;
export type Question = {
    question: string,
    answers: [],
    correct_answers: string[],
    category: string,
};
