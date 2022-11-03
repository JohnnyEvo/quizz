export type QuestionsApi = QuestionApi[];

export interface QuestionApi {
    id: number
    question: string
    description: string | null
    answers: Answers,
    multiple_correct_answers: "true" | "false"
    correct_answers: CorrectAnswers
    correct_answer: "answer_a" | "answer_b" | "answer_c" | "answer_d" | "answer_e" | "answer_f",
    explanation: string | null
    tip: string | null
    tags: { "name": string }[]
    category: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
}

export type CorrectAnswers = {
    "answer_a_correct"(string): "false" | "true",
    "answer_b_correct"(string): "false" | "true",
    "answer_c_correct"(string): "false" | "true",
    "answer_d_correct"(string): "false" | "true",
    "answer_e_correct"(string): "false" | "true",
    "answer_f_correct"(string): "false" | "true"
}
export type Answers = {
    "answer_a"(string): string
    "answer_b"(string): string
    "answer_c"(string): string | null
    "answer_d"(string): string | null
    "answer_e"(string): string | null
    "answer_f"(string): string | null
}
