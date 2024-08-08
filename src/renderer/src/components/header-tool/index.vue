<script setup lang="ts">
import { useAppStore } from '@renderer/store/useAppStore';

/**
 * `HeaderTool` component
 *
 * A component that provides various interactive buttons for the user.
 * - A button to toggle the application theme between dark and light modes.
 * - A speed dial button to switch between different locales (Chinese Simplified and English).
 * - A button to close the current window.
 *
 * @component
 */
defineOptions({
  name: 'header-tool'
})

const appConfig = useAppStore()

/**
 * Handles the closing of the application window.
 */
const handleClose = () => {
  window.api.closeWin()
}
</script>

<template>
  <div class="header-tool">
    <!-- Button to toggle the theme -->
    <v-btn slim @click="appConfig.toggleTheme" size="30"
      :icon="appConfig.theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'">
    </v-btn>

    <!-- Speed dial for changing locale -->
    <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
      <template v-slot:activator="{ props: activatorProps }">
        <!-- Activator button for the speed dial -->
        <v-btn v-bind="activatorProps" slim icon="mdi-translate" size="30">
        </v-btn>
      </template>
      <!-- Button for changing locale to Chinese Simplified -->
      <v-btn key="1" size="30" icon="mdi-ideogram-cjk-variant" @click="appConfig.changeLocale('zhHans')"></v-btn>
      <!-- Button for changing locale to English -->
      <v-btn key="2" size="30" icon="mdi-alphabetical-variant" @click="appConfig.changeLocale('en')"></v-btn>
    </v-speed-dial>

    <!-- Button to close the application window -->
    <v-btn slim icon="mdi-window-close" size="30" @click="handleClose">
    </v-btn>
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
