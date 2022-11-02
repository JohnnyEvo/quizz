<template>
  <div>
    <p class="text-[#271083] text-xl font-title">
      Choisissez le temps
    </p>
    <p class="text-gray-400 text-sm py-4 grow">
      Moins de temps pour un max de points.
    </p>
    <ul class="flex justify-center items-center gap-4">
      <li
          class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
          @click="choiceTime(3)"
      >
        3
      </li>
      <li
          class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
          @click="choiceTime(10)"
      >
        10
      </li>
      <li class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
          @click="choiceTime(30)"
      >
        30
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {useGameStore} from "~/store/game";
import {Time} from "../../types/global";
import {useRedirectIfNotDifficult, useRedirectIfNotQuestionNumber} from "../../composables/router/redirectIfGameInvalid";

export default {
  emits: ['progress'],
  async setup(props, {emit}) {
    const gameStore = useGameStore()

    emit("progress", 66)

    useRedirectIfNotDifficult();
    useRedirectIfNotQuestionNumber();
    return { gameStore }
  },
  methods: {
    async choiceTime(time: Time) {
      this.gameStore.setTime(time)
    },
  },
}
</script>
