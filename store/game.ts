import {defineStore} from 'pinia';
import {Game} from "~/interfaces/Game";
import {Difficult, Question, QuestionNumber, Time} from "@/types/game";
import {QuestionsApi} from "../types/api";

function reformatQuestionsFromApi(value: QuestionsApi): Question[] {
    let questions = [];
    for (const questionApi of value) {
        let question = <Question>{};

        let correct_answers = [];
        for (const answer in questionApi.correct_answers) {
            if ((questionApi.correct_answers as any)[answer] === "true") {
                let correct_answer = answer.split('_')[0] + '_' + answer.split('_')[1];
                correct_answers.push((questionApi.answers as any)[correct_answer])
            }
        }

        question.question = questionApi.question;
        question.answers = <[]>Object.values(questionApi.answers);
        question.correct_answers = correct_answers;
        question.category = questionApi.category;

        questions.push(question)
    }

    return questions;
}

export const useGameStore = defineStore('game', {
    state: () => {
        return {
            game: <Game>{},
            round: 0,
            good_answers: 0,
        }
    },
    getters: {
        timeByQuestion(state) {
            return state.game.time_by_question
        },
        questionNumber(state) {
            return state.game.question_number
        },
        difficult(state) {
            return state.game.difficult
        },
        questions(state) {
            return state.game.questions
        },
        currentQuestion(state) {
            return state.game.questions ? state.game.questions[state.round] : {'correct_answers': []}
        },
        goodAnswers(state) {
            return state.good_answers
        },
        finished(state) {
            return state.game.question_number <= state.round
        }
    },
    actions: {
        setDifficulty(value: Difficult) {
            this.game.difficult = value;
        },
        setNumberQuestion(value: QuestionNumber) {
            this.game.question_number = value;
        },
        setTime(value: Time) {
            this.game.time_by_question = value;
        },
        setQuestions(value: QuestionsApi) {
            this.game.questions = reformatQuestionsFromApi(value);
        },
        nextRound() {
            this.round++;
        },
        incrementGoodAnswer() {
            this.good_answers++;
        },
        reset() {
            this.game = <Game>{};
            this.round = 0;
            this.good_answers = 0;
        }
    },
})
