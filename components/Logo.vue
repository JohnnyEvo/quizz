<template>
  <div class="relative w-64 h-64">
    <Question fill-color="#feaf82"
              stroke-color="transparent"
              class="w-64 h-64 absolute top-0 left-0 block"
    />
    <Question :fill-color="'transparent'"
              :stroke-color="'white'"
              class="w-64 h-64 absolute top-0 -left-2 block"
              id="question-stroke-svg"
    />
  </div>
</template>
<script lang="ts">
import Question from "./icons/Question.vue"
import Vivus from 'vivus';
import {onMounted} from "@vue/runtime-core";
import stroke from "../compositions/animations/stroke";

export default {
  name: 'Logo',
  components: {Question},
  setup() {
    onMounted(() => {
      stroke('question-stroke-svg')
    })
  }
}
</script>