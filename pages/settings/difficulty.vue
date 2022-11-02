<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import {useGameStore} from "~/store/game";
import {Difficult} from "../../types/global";

export default {
  emits: ['progress'],
  async setup(props, {emit}) {
    const gameStore = useGameStore();

    emit("progress", 0);

    return {gameStore};
  },
  methods: {
    async choiceDifficulty(difficulty: Difficult) {
      this.gameStore.setDifficulty(difficulty)

      this.$router.push('/settings/questions_number');
    },
  },
}
</script>
