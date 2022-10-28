<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <Logo/>
      <ProgressBar :progress="progress_percent" />
      <Card>
        <slot  />
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import {Card, ProgressBar} from "#components";
import Logo from "~/components/Logo.vue";

export default {
  components: {Logo, Card, ProgressBar},
  props: {
    progress_percent: {
      required: false,
      default: () => 0
    }
  },
}
</script>
