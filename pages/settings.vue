<template>
  <NuxtLayout>
    <ProgressBar :progress="progress_percent"/>
    <Card>
      <NuxtPage @progress="changeProgress" :transition="useSettingsWave"/>
      <WaveTransition/>
    </Card>
  </NuxtLayout>
</template>

<script lang="ts">
import {useRouter} from "nuxt/app";
import {onMounted} from "vue";
import {useSettingsWave} from "@/composables/transitions/settingsWave";
import {useTranslateContent} from "@/composables/transitions/translateContent";

export default {
  async setup() {
    const router = useRouter();

    definePageMeta({
      pageTransition: useTranslateContent,
    })

    onMounted(() => {
      router.push('/settings/difficulty');
    });

    return {useSettingsWave}
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