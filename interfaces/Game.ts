import {Difficult, Question, QuestionNumber, Time} from "@/types/game";

export interface Game
{
    difficult: Difficult;
    question_number: QuestionNumber;
    time_by_question: Time;
    questions: Question[];
}
