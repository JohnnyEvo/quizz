import {storeToRefs} from "pinia";
import {useGameStore} from "../store/game";
import {ref} from "vue";
import {watchEffect} from "../.nuxt/imports";

export let useQuestionProgress = () => {
    const gameStore = useGameStore();
    const question_progress = ref(0);

    const {round, questionNumber} = storeToRefs(gameStore);

    watchEffect(() => {
        question_progress.value = (round.value * 100) / questionNumber.value
    })

    return {question_progress}
};
