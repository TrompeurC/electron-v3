import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore('loading', () => {
  const loading = ref(false)
  return {
    loading
  }
})
