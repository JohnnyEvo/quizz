<template>
  <ul class="flex justify-between">
    <li class="border border-alternative px-4 py-2 flex bg-primary rounded-full text-white font-light" title="Difficulté">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor"/>
      </svg>
      &nbsp;{{ gameStore.difficult }}
    </li>
    <li class="border border-alternative px-4 py-2 flex bg-primary rounded-full text-white font-light" title="Temps par question">
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 7H11V12H16V14H9V7Z" fill="currentColor"/>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
            fill="currentColor"
        />
      </svg>
      &nbsp;
      {{ gameStore.timeByQuestion }}
    </li>
    <li class="border border-alternative px-4 py-2 flex bg-primary rounded-full text-white font-light" title="Nombre de question">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z"
              fill="currentColor"/>
      </svg>
      &nbsp;{{ gameStore.questionNumber }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useGameStore} from "@/store/game";

const gameStore = useGameStore()
</script>
