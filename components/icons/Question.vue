<template>
  <Question class="question" :style="`--fill-question-color: ${props.fillColor};--stroke-question-color: ${props.strokeColor}`" />
</template>

<script setup lang="ts">
import Question from '~/assets/icons/question.svg';

const props = defineProps({
  fillColor: {
    required: true,
    type: String
  },
  strokeColor: {
    required: true,
    type: String
  },
})
</script>

<style>
.question path, .question rect, .question circle {
  fill: var(--fill-question-color);
  stroke: var(--stroke-question-color);
  stroke-width: .5px;
}
</style>
