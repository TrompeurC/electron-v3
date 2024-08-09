<script setup lang='ts'>
import useLoadingStore from '@renderer/store/useLoadingStore';

defineOptions({
  name: 'custom-loading',
})

const loadingStore = useLoadingStore();

</script>

<template>

  <v-overlay :model-value="loadingStore.loading" class="align-center justify-center">
    <v-progress-circular size="20" indeterminate></v-progress-circular>
  </v-overlay>
</template>

<
