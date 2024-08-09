import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getInfo, getMenu }  from '@renderer/api/user'
import { Parent, Role } from '@renderer/interface/user'


export default defineStore('user', () => {
  const token = ref('')
  const roles = ref<Role[]>([])
  const rolePerm = ref('')
  const menu = ref<Parent[]>([])
  const setToken = (val: string) => token.value = val
  const getUserInfo = async () => {
    const res = await getInfo()
    roles.value =  res.data!.roles
    rolePerm.value =  roles.value[0].rolePerm
  }
  const getUserMenu = async () => {
    const res = await getMenu(rolePerm.value)
    menu.value =  res.data!
  }
  return {
    token,
    roles,
    rolePerm,
    menu,
    setToken,
    getUserInfo,
    getUserMenu
  }
}, {
  persist: true,
})
