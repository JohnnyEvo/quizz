<template>
  <div class="relative w-64 h-64">
    <IconsQuestion fill-color="#feaf82"
              stroke-color="transparent"
              class="w-64 h-64 absolute top-0 left-0 block"
    />
    <IconsQuestion :fill-color="'transparent'"
              :stroke-color="'white'"
              class="w-64 h-64 absolute top-0 -left-2 block"
              id="question-stroke-svg"
    />
  </div>
</template>
<script lang="ts">
import {onMounted} from "@vue/runtime-core";
import stroke from "@/composables/animations/stroke";

export default {
  name: 'Logo',
  setup() {
    onMounted(() => {
      stroke('question-stroke-svg')
    })
  }
}
</script>