<template>
  <ArrowRight class="arrow-right" :style="`--fill-arrow-right-color: ${props.fillColor};--stroke-arrow-right-color: ${props.strokeColor}`" />
</template>

<script setup lang="ts">
import ArrowRight from '~/assets/icons/arrow-right.svg';

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
:root {
  --fill-arrow-right-color: blue;
}
.arrow-right path {
  fill: var(--fill-arrow-right-color);
  stroke: var(--stroke-arrow-right-color);
  stroke-width: .5px;
}
</style>
