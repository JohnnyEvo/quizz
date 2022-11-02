<template>
  <NuxtLayout>
    <ProgressBar :progress="progress_percent"/>
    <Card>
      <NuxtPage @progress="changeProgress" :transition="useSettingsWaveTransition"/>
      <WaveTransition/>
    </Card>
  </NuxtLayout>
</template>

<script lang="ts">
import {useRouter} from "nuxt/app";
import {onMounted} from "vue";
import useSettingsWaveTransition from "../composables/transitions/useSettingsWave";
import useTranslateContent from "../composables/transitions/useTranslateContent";

export default {
  async setup() {
    const router = useRouter();

    definePageMeta({
      pageTransition: useTranslateContent,
    })

    onMounted(() => {
      router.push('/settings/difficulty');
    });

    return {useSettingsWaveTransition}
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