<script setup lang="ts">
import { ref, watch } from 'vue'
import { type AlertInfo, newAlert } from './alert'

// 定义 Map，存储Alert信息集合，使用Map便于删除
const alertMap = ref<Map<string, AlertInfo>>(new Map)

defineOptions({
  name: 'custom-alert'
})

// 监听新Alert创建
watch(newAlert.value, () => {
  alertMap.value.set(newAlert.value.id, { ...newAlert.value })
  deleteAlert(newAlert.value.id)
})

const deleteAlert = (id: string) => {
  setTimeout(() => {
    alertMap.value.delete(id)
  }, 3000)

}
</script>

<template>
  <div class="alert-container">
    <v-alert class="v-alert" v-for="(alert, index) in Array.from(alertMap.values())" :key="index" :type="alert.type"
      variant="flat" closable :text="alert.message">
    </v-alert>
  </div>
</template>

<style scoped>
.alert-container {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.v-alert {
  margin-top: 0.2rem !important;
}
</style>
