<script setup lang="ts">
import { useAppConfig } from './store/useAppConfig';

const appConfig = useAppConfig()
</script>

<template>
  <v-app :theme="appConfig.theme">
    <RouterView />
    <custom-alert></custom-alert>
  </v-app>
</template>
