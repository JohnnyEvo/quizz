import {storeToRefs} from "pinia";
import {watch} from "vue";
import {useGameStore} from "../store/game";
import {ref} from "vue";

export let useQuestion = () => {
    const gameStore = useGameStore();
    const {currentQuestion: question} = storeToRefs(gameStore)
    const number_correct_answers = ref(0);

    let checkAnswer = async (answer: HTMLElement) => {
        const answer_text = answer.innerText;
        let correct_answers = question.value.correct_answers;

        for (const correct_answer of correct_answers) {
            if (answer_text === correct_answer) {
                await markAsCorrect(answer);
                number_correct_answers.value++;
            } else {
                await markAsBad(answer);
                nextQuestion();
            }
        }
    }

    let markAsCorrect = async (element: HTMLElement) => {
        const answerElements = document.getElementsByClassName('answer-js');

        for (const element of answerElements) {
            element.classList.remove('bg-white');
            element.classList.add('bg-transparent');
        }

        element.classList.remove('bg-transparent');
        element.classList.remove('text-primary');

        element.classList.add('bg-primary');
        element.classList.add('text-white');

        await new Promise(resolve => {
            setTimeout(() => resolve(true), 1000);
        })
    }


    let markAsBad = async (element: HTMLElement) => {
        element.classList.remove('bg-white');
        element.classList.remove('text-primary');

        element.classList.add('bg-[rgb(var(--color-danger))]');
        element.classList.add('text-white');

        await new Promise(resolve => {
            setTimeout(() => resolve(true), 1000);
        })
    }

    let resetAnswers = () => {
        const answerElements = document.getElementsByClassName('answer-js');

        for (const element of answerElements) {
            element.classList.remove('bg-transparent');
            element.classList.remove('bg-primary');
            element.classList.remove('text-white');
            element.classList.remove('bg-[rgb(var(--color-danger))]');

            element.classList.add('bg-white');
            element.classList.add('text-primary');

            element.removeAttribute('data-clicked');
        }
    }

    let nextQuestion = () => {
        gameStore.nextRound();
        resetAnswers();
    }

    let selectAnswer = async (e: Event) => {
        if (!(<HTMLElement>e.target).hasAttribute('data-clicked')) {
            (<HTMLElement>e.target).setAttribute('data-clicked', '');
            await checkAnswer(<HTMLElement>e.target);
        }
    }

    watch(number_correct_answers, value => {
        if (<number>value === <number>question.value.correct_answers.length) {
            gameStore.incrementGoodAnswer();
            nextQuestion();
        }
    })

    return {question, selectAnswer, nextQuestion}
};
