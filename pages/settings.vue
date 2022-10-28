<template>
  <NuxtLayout>
    <Single :progress_percent="progress_percent">
      <router-view @progress="changeProgress"></router-view>
      <div class="w-full h-full bg-secondary absolute transition-all duration-1000 left-0 bottom-0 translate-y-full"
           id="wave-bg"></div>
      <Wave stroke-color="transparent" fill-color="#11cccc"
            class="delay-150 w-full h-full absolute transition-all duration-1000 left-0 bottom-0 translate-y-full"
            id="wave"/>
    </Single>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Wave from '~/components/icons/Wave.vue'
import Single from "~/components/Single.vue";
import {onMounted} from "@vue/runtime-core";
import {useRouter} from "nuxt/app";
import {ref} from "@vue/reactivity";
import {Ref} from "vue";
const router = useRouter()

onMounted(() => {
  router.push('/settings/difficulty');
})

let progress_percent: Ref<Number> = ref(0)

let changeProgress = (value: Number) => {
  return progress_percent.value = value
}
</script>