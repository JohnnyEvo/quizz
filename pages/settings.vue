<template>
  <NuxtLayout>
    <div class="h-screen w-screen flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <Logo/>
        <ProgressBar :progress="progress_percent"/>
        <Card>
          <NuxtPage @progress="changeProgress" />
          <WaveTransition />
        </Card>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import {useRouter} from "nuxt/app";
import {onMounted} from "vue";
import useWaveTransition from "../composables/transitions/settings-wave";

export default {
  async setup() {
    const router = useRouter();

    definePageMeta({
      pageTransition: useWaveTransition
    });

    onMounted(() => {
      router.push('/settings/difficulty');
    })
  },
  data() {
    return {
      progress_percent: 0
    }
  },
  methods: {
    changeProgress(value: number) {
      this.progress_percent = value;
    }
  }
}
</script>