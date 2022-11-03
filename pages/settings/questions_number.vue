<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import {useGameStore} from "~/store/game";
import {QuestionNumber} from "@/types/game";
import {useRedirectIfNotDifficult} from "@/composables/router/redirectIfGameInvalid";

export default {
  emits: ['progress'],
  async setup(props, {emit}) {
    const gameStore = useGameStore();

    definePageMeta({
      pageTransition: {},
    });

    useRedirectIfNotDifficult();
    emit("progress", 33);

    return {gameStore}
  },
  methods: {
    choiceQuestionNumber(number: QuestionNumber) {
      this.gameStore.setNumberQuestion(number);

      this.$router.push('/settings/time');
    },
  }
}
</script>
