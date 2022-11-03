<template>
  <NuxtLayout name="game">
    <div class="max-w-xl">
      <div class="text-center text-6xl text-white my-8" :class="{'text-alternative': c < 4}">
        {{ c }}
      </div>
      <ResumeSettings/>
      <div class="mt-2 bg-white text-primary p-4 rounded">
        <span class="uppercase after:mx-1 after:content-[':']" v-if="question.category">{{ question.category }}</span>
        {{ question.question }}
      </div>
      <div class="flex flex-col justify-between mt-4">
        <div
            class="overflow-hidden relative my-1 bg-white text-primary py-4 px-2 cursor-pointer rounded-lg hover:bg-primary transition-all hover:text-white hover:border hover:border-alternative border border-primary text-center answer-js"
            v-for="answer in question.answers"
            v-show="answer"
            @click="selectAnswer"
        >
          {{ answer }}
          <div class="absolute top-0 left-0 w-full h-full bg-secondary rounded-lg translate-y-full"></div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {useCountdown} from "@/composables/countdown";
import {useGameStore} from "@/store/game";
import {watch} from "vue";
import {useQuestion} from "../composables/question";
import {storeToRefs} from "pinia";
import {useRouter} from "nuxt/app";

definePageMeta({
  middleware: ["redirect-if-game-is-invalid"]
})

const gameStore = useGameStore();

const {selectAnswer, question, nextQuestion } = useQuestion();

const {c, reset} = useCountdown(gameStore.timeByQuestion);

const {finished} = storeToRefs(gameStore);

watch(c, value => {
  if(value <= 0) {
    nextQuestion();
  }
});

watch(question, value => {
  reset();
});

watch(finished, () => {
  const router = useRouter();
  router.push('/result');
})

</script>
