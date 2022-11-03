<template>
  <NuxtLayout name="game">
    <div ref="container" class="bg-white/20 border-white border rounded-lg p-8 max-w-xl w-full content">
      <div class="h-80 rounded-t-lg flex justify-around items-center">
        <div class="h-full flex flex-col items-center">
          <div ref="goal" class="w-3 h-3 bg-secondary rounded-full"></div>
          <div class="relative bg-secondary h-full w-2">
            <div
                ref="flag"
                class="absolute border-t-[24px] border-r-[48px] border-b-[24px] border-transparent border-r-alternative -left-[48px] w-48px top-[calc(100%-48px)]"></div>
          </div>
          <div class="w-6 h-3 bg-secondary"></div>
        </div>
        <div class="flex flex-col items-center justify-center text-center text-white p-4 w-full max-w-sm">
          <h2>Résultat</h2>
          <br>
          <span class="text-6xl">{{ gameStore.goodAnswers }}/{{ gameStore.round }}</span>
          <br>
          <span class="text-2xl">{{ message }}</span>
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="/"
           @click="restart"
           class="bg-alternative text-white py-4 px-6 rounded-lg text-xl shadow hover:shadow-xl transition-all">Rejouer</a>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {onMounted, useResultMessage} from "../.nuxt/imports";
import party from 'party-js';
import {animate} from "motion";
import {useGameStore} from "../store/game";
import {useTranslateContent} from "../composables/transitions/translateContent";
import {useRouter} from "nuxt/app";

const container = ref();
const flag = ref();
const goal = ref();

definePageMeta({
  pageTransition: useTranslateContent
})

const gameStore = useGameStore();
const score = (gameStore.goodAnswers * 100) / gameStore.round;
const router = useRouter();

let restart = (e: Event) => {
  e.preventDefault();
  gameStore.reset();
  router.push('/');
}

const {message} = useResultMessage(score);

onMounted(async () => {
  await party.sparkles(container.value, {
    count: party.variation.range(30, 80),
    size: party.variation.range(2, 4),
    lifetime: party.variation.range(4, 8),
  });

  await new Promise(resolve => {
    setTimeout(() => resolve(), 2000)
  })
  await animate(flag.value, {top: `${100 - score}%`}, {duration: 2, easing: 'ease-in-out'}).finished;

  if (score === 100) {
    party.confetti(goal.value);
    setInterval(() => {
      party.confetti(goal.value);
    }, 1000)
  }
})
</script>
