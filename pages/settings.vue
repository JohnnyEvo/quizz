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

<script lang="ts">
import Wave from '~/components/icons/Wave.vue'
import Single from "~/components/Single.vue";
import {onMounted} from "@vue/runtime-core";
import {useRouter} from "nuxt/app";

export default {
  async setup() {
    const router = useRouter();

    onMounted(() => {
      router.push('/settings/difficulty');
    })
  },
  components: {Wave, Single},
  data() {
    return {
      progress_percent: 0
    }
  },
  methods: {
    changeProgress(value : number) {
      this.progress_percent = value;
    }
  }
}
</script>