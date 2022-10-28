<template>
  <NuxtLayout>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
      <Logo />
      <div class="text-white p-8 rounded-lg border-2 border-white relative after:content[''] after:border-2 after:absolute after:top-2 after:left-2 after:w-full after:h-full after:border-secondary after:rounded-lg before:content[''] before:border-2 before:absolute before:top-4 before:left-4 before:w-full before:h-full before:border-black before:rounded-lg">
        <h1 class="font-title text-6xl">QuizzUp</h1>
      </div>
      <div class="m-8 bg-alternative px-8 py-4 rounded-lg text-white cursor-pointer shadow-xl flex justify-center items-center hover:shadow-2xl transition-all font-bold" @click="goSettings">
        <span class="uppercase">Start</span>
        <ArrowRight fill-color="transparent" stroke-color="white" class="w-8 h-8 ml-4" id="arrow-right" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Logo from '~/components/Logo.vue'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import {useRouter} from "nuxt/app";
const router = useRouter();

let goSettings = ():void => {
  router.push({name:'settings'})
}

</script>
