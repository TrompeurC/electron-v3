import useUserStore from "@renderer/store/useUserStore"
import type { NavigationFailure, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"

export const beforeEach:NavigationGuardWithThis<unknown> = (to, form , next) => {
  if(to.path === '/login') {
    return next()
  }
  const userConfig = useUserStore()
  if(!userConfig.token) {
    next('/login')
  } else {
    next()
  }
}


export const afterEach:NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, failure?: NavigationFailure | void) => {
}
