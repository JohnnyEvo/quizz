<template>
  <div class="w-full h-4 rounded-full bg-white my-2 grid grid-flow-col overflow-hidden">
    <div class="progressbar bg-secondary h-full transition-all w-0" :style="`--progress-bar-width:${progress}%`"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    progress: {
      type: Number,
      required: false,
      default: () => 25
    }
  }
}
</script>

<style>
.progressbar {
  width: var(--progress-bar-width);
}
</style>
