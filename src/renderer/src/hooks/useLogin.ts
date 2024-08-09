import useUserStore from "@renderer/store/useUserStore"
import {router} from '@renderer/router'
import useLoadingStore from "@renderer/store/useLoadingStore"

export default async (token: string) => {
  const loadingStore = useLoadingStore()
  loadingStore.loading = true
  const userStore = useUserStore()
  userStore.setToken(token)
  await userStore.getUserInfo()
  await userStore.getUserMenu()
  loadingStore.loading = false

  router!.push('/')
}
