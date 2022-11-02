<template>
  <div class="relative overflow-hidden">
      <slot/>
  </div>
</template>

<script lang="ts" setup>
import {useHead} from "nuxt/app";

useHead({
  bodyAttrs: {
    class: "bg-primary-gradient bg-cover w-screen h-screen font-body"
  }
})
</script>
