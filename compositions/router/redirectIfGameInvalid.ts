import {onMounted} from "@vue/runtime-core";
import {useRouter} from "nuxt/app";
import {useGameStore} from "../../store/game";

export default () => {
    redirectIfNotQuestionNumber();
    redirectIfNotDifficult();
}

export let redirectIfNotDifficult = () => {
    onMounted(() => {
        const router = useRouter();
        const gameStore = useGameStore();

        if (!gameStore.game.difficult) {
            router.push('/settings/difficulty')
        }
    });
}

export let redirectIfNotQuestionNumber = () => {
    onMounted(() => {
        const router = useRouter();
        const gameStore = useGameStore();

        if (!gameStore.game.question_number) {
            router.push('/settings/difficulty')
        }
    });
}
