<template>
  <div ref="counter" class="text-8xl z-10 relative">
    <span v-if="c > 0">{{ c }}</span>
    <span v-else>GO !</span>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import {timeline} from "motion";
import {useCountdown} from "@/composables/countdown";

const props = defineProps({
  countdown: Number
})

const emit = defineEmits(['finished']);

let {c} = useCountdown(props.countdown);

const counter = ref();
onMounted(() => {
  let shake_sequence = [
    [counter.value, {transform: "scale(1.5)"}],
    [counter.value, {transform: "scale(1)"}],
    [counter.value, {transform: "scale(1.5)"}],
    [counter.value, {transform: "scale(1)"}],
    [counter.value, {transform: "scale(1.5)"}],
    [counter.value, {transform: "scale(1)"}],
  ];

  timeline(shake_sequence, {repeat: Infinity, duration: 3});
});

watch(c, (val) => {
  if(val === 0) {
    emit("finished");
  }
})
</script>
