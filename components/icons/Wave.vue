<template>
  <Wave class="wave" :style="`--fill-wave-color: ${props.fillColor};--stroke-wave-color: ${props.strokeColor}`" />
</template>

<script setup lang="ts">
import Wave from '~/assets/icons/wave.svg';

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
.wave path, .wave rect, .wave circle {
  fill: var(--fill-wave-color);
  stroke: var(--stroke-wave-color);
  stroke-width: .5px;
}
</style>
