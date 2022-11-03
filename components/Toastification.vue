<template>
  <div
      class="z-[99] absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-2xl flex flex-col"
  >
    <transition-group name="toasters">
      <div
          class="max-w-2xl w-full p-4 flex flex-col justify-center my-1"
          :class="textColors[notification.type]"
          :style="{backgroundColor: bgColors[notification.type]}"
          v-for="notification in notificationStore.notifications"
          :key="notification.id"
      >
        <span v-show="notification.title">{{ notification.title }}</span>
        <hr
            class="py-2 border-white"
            v-show="notification.title"
        >
        <span class="font-light">{{ notification.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import {useNotificationStore} from "../store/notifications";

const bgColors = {
  error: "rgb(var(--color-danger))",
  warning: "rgb(var(--color-warning))",
  success: "rgb(var(--color-alternative))",
};

const textColors = {
  error: "text-white",
  warning: "text-black",
  success: "text-white",
};

const notificationStore = useNotificationStore();
</script>

<style>
.toasters-enter,
.toasters-leave-to {
  transform: scale(1.12);
  opacity: 0;
}

.toasters-enter-active,
.toasters-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}
</style>

