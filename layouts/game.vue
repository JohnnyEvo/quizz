<template>
  <div class="relative overflow-hidden">
    <div class="flex flex-col justify-center items-center h-screen w-screen">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useHead} from "nuxt/app";

useHead({
  bodyAttrs: {
    class: "bg-primary-gradient bg-cover w-screen h-screen font-body overflow-hidden"
  }
})
</script>
