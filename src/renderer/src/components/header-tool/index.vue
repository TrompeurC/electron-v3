<script setup lang="ts">
import { useAppConfig } from '@renderer/store/useAppConfig';

defineOptions({
  name: 'header-tool'
})

const appConfig = useAppConfig()

const handleClose = () => {
  window.api.closeWin()
}

</script>

<template>
  <div class="header-tool">
    <v-btn slim @click="appConfig.toggleTheme" size="30"
      :icon="appConfig.theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'">
    </v-btn>
    <v-btn slim icon="mdi-window-close" size="30" @click="handleClose">
    </v-btn>
    <!-- <v-btn icon="mdi-window-close">
    </v-btn> -->
  </div>
</template>

<style scoped lang="scss">
.header-tool {
  @apply absolute right-2 top-0 py-4 flex gap-3 px-2 items-center;

  :deep(.v-icon--size-default) {
    font-size: 20px;
  }
}
</style>
