import { defineStore } from 'pinia';
import {Game} from "~/interfaces/Game";
import {Difficult, QuestionNumber, Time} from "../types/global";

export const useGameStore = defineStore('game', {
    state: () => {
        return { game: <Game>{} }
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
    },
})
