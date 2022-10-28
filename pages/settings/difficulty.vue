<template>
      <p class="text-[#271083] text-xl font-title">
        Choisissez la difficulté
      </p>
      <p class="text-gray-400 text-sm py-4 grow">
        Une difficulté élevée, rapporte plus de point.
      </p>
      <ul class="flex justify-center items-center gap-4">
        <li
            class="shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
            @click="choiceDifficulty('easy')"
        >
          Facile
        </li>
        <li
            class="shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
            @click="choiceDifficulty('medium')"
        >
          Moyen
        </li>
        <li class="shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
            @click="choiceDifficulty('hard')"
        >
          Difficile
        </li>
      </ul>
</template>

<script lang="ts" setup>
import {useGameStore} from "~/store/game";
import waveAnimation from "~/compositions/animations/wave";
import {Difficult} from "../../types/global";
import { defineEmits } from 'vue'
import {useRouter} from "nuxt/app";
const emit = defineEmits(['progress'])
const router = useRouter()
const gameStore = useGameStore()

emit('progress', 0)
await waveAnimation();

let choiceDifficulty = (difficulty: Difficult) => {
  gameStore.setDifficulty(difficulty)
  router.push('/settings/questions_number')

}
</script>
