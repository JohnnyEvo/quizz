import {onMounted} from "@vue/runtime-core";
import {useRouter} from "nuxt/app";
import {useGameStore} from "../../store/game";

export let useRedirectIfNotDifficult = () => {
    onMounted(() => {
        const router = useRouter();
        const gameStore = useGameStore();

        if (!gameStore.game.difficult) {
            router.push('/settings/difficulty')
        }
    });
}

export let useRedirectIfNotQuestionNumber = () => {
    onMounted(() => {
        const router = useRouter();
        const gameStore = useGameStore();

        if (!gameStore.game.question_number) {
            router.push('/settings/difficulty')
        }
    });
}
