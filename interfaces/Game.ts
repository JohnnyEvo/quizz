import {Difficult, QuestionNumber, Time} from "../types/global";

export interface Game
{
    difficult: Difficult;
    question_number: QuestionNumber;
    time_by_question: Time;
}
