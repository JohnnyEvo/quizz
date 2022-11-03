import {useRouter} from "nuxt/app";
import {useGameStore} from "@/store/game";

export let useRedirectIfGameInvalid = () => {
    useRedirectIfNotDifficult();
    useRedirectIfNotTime();
    useRedirectIfNotQuestionNumber();
    useRedirectIfNotQuestions();
};

export let useRedirectIfNotTime = () => {
    const router = useRouter();
    const gameStore = useGameStore();

    if (!gameStore.game.time_by_question) {
        router.push('/settings/difficulty')
    }
}


export let useRedirectIfNotDifficult = () => {
    const router = useRouter();
    const gameStore = useGameStore();

    if (!gameStore.game.difficult) {
        router.push('/settings/difficulty')
    }
}

export let useRedirectIfNotQuestionNumber = () => {
    const router = useRouter();
    const gameStore = useGameStore();

    if (!gameStore.game.question_number) {
        router.push('/settings/difficulty')
    }
}

export let useRedirectIfNotQuestions = () => {
    const router = useRouter();
    const gameStore = useGameStore();

    if (!gameStore.game.questions || gameStore.game.questions.length === 0) {
        router.push('/start')
    }
}
