<template>
  <NuxtLayout name="game">
    <div>
      <div class="relative text-white p-8 flex items-center">
        <Countdown @finished="redirectToQuestions" :countdown="3"/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useRouter} from "nuxt/app";
import {useGameStore} from "../store/game";
import {useApiError} from "../composables/errors/api";
import {QuestionsApi} from "../types/api";

const gameStore = useGameStore();

try {
  $fetch('/api/questions', {
    query: {
      question_number: gameStore.questionNumber,
      difficult: gameStore.difficult,
      time_by_question: gameStore.timeByQuestion,
    }
  }).then((questions: QuestionsApi) => {
    gameStore.setQuestions(questions);
  }).catch(error => {
    useApiError(error.data);
  });
} catch (error) {
  useApiError(error.data);
}

let redirectToQuestions = () => {
  setTimeout(() => {
    const router = useRouter();
    router.push('/question');
  }, 2000)
}
</script>
