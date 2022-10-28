<template>
  <p class="text-[#271083] text-xl font-title">
    Choisissez le nombre de question
  </p>
  <p class="text-gray-400 text-sm py-4 grow">
    Plus de questions = plus de point !
  </p>
  <ul class="flex justify-center items-center gap-4">
    <li
        class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
        @click="choiceQuestionNumber(5)"
    >
      5
    </li>
    <li
        class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
        @click="choiceQuestionNumber(10)"
    >
      10
    </li>
    <li class="w-16 shadow p-3 bg-alternative text-white rounded text-lg cursor-pointer hover:shadow-xl transition hover:scale-110 block"
        @click="choiceQuestionNumber(20)"
    >
      20
    </li>
  </ul>
</template>

<script lang="ts">
import {Single} from "#components";
import {useGameStore} from "~/store/game";
import waveAnimation from "~/compositions/animations/wave";
import {QuestionNumber} from "../../types/global";

export default {
  emits: ['progress'],
  async setup(props, {emit}) {
    const gameStore = useGameStore();

    emit("progress", 33);

    await waveAnimation();

    return {gameStore}
  },
  components: {Single},
  methods: {
    choiceQuestionNumber(number: QuestionNumber) {
      this.gameStore.setNumberQuestion(number)

      this.$router.push('/settings/time');
    },
  }
}
</script>
