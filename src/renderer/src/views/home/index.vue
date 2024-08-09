<script setup lang="ts">
import useDrag from '@renderer/hooks/useDrag';
import { ref } from 'vue';

const titleRef = ref<HTMLDivElement | undefined>()

useDrag(titleRef)

</script>

<template>
  <div class="container">
    <aside class="container__aside__icon">
      <div class="flex flex-col items-center">
        <v-avatar color="info" size="32">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </div>
    </aside>
    <aside class="container__aside__title">
      <div class="text-lx pt-1 font-bold" ref="titleRef">首页</div>
      <v-divider inset class="border-opacity-100"></v-divider>
      <div>11</div>
      <div>22</div>
    </aside>
    <main class="container__main">
      main
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  @apply w-screen h-screen flex;

  &__aside__icon {
    @apply w-[64px] bg-slate-700 py-2;
  }

  &__aside__title {
    @apply w-[210px] flex flex-col items-center gap-2 bg-white;
  }

  &__main {
    @apply flex-1;
  }
}
</style>
