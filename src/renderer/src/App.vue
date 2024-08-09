<script setup lang="ts">
import { useAppStore } from './store/useAppStore';

const appConfig = useAppStore()
</script>

<template>
  <v-app :theme="appConfig.theme">
    <RouterView />
    <custom-alert />
    <custom-loading />
  </v-app>
</template>
