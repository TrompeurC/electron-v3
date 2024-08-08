import { defineStore } from 'pinia'
import { ref } from 'vue'


export default defineStore('user', () => {
  const token = ref('')
  const setToken = (val: string) => token.value = val
  return {
    token,
    setToken
  }
}, {
  persist: true,

})
