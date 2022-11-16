<template>
  <NuxtLayout name="game">
    <div class="bg-white/20 border-white border rounded-lg p-8 max-w-xl w-full content">
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
          <h2 ref="result">Résultat</h2>
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
import {animate} from "motion";
import {useGameStore} from "../store/game";
import {useRouter} from "nuxt/app";
import {useDelay} from "../composables/delay";
import party from 'party-js';

const result = ref();
const flag = ref();
const goal = ref();

const gameStore = useGameStore();
const score = (gameStore.goodAnswers * 100) / gameStore.round;

let restart = async (e: Event) => {
  e.preventDefault();

  const router = useRouter();
  await router.push('/');
  gameStore.reset();
}

const {message} = useResultMessage(score);

onMounted(async () => {
  await useDelay(500);

  party.sparkles(result.value, {
    count: party.variation.range(30, 80),
    size: party.variation.range(2, 4),
    lifetime: party.variation.range(4, 8),
  });

  await useDelay(500);

  await animate(flag.value, {top: `${100 - score}%`}, {duration: 2, easing: 'ease-in-out'}).finished;

  if (score === 100) {
    party.confetti(goal.value);
    setInterval(() => {
      party.confetti(goal.value);
    }, 1000)
  }
})
</script>
