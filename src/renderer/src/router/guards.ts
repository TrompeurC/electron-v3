import useUserStore from "@renderer/store/useUserStore"
import type { NavigationFailure, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"

/**
 * Navigation guard that controls access to routes based on user authentication.
 *
 * @param to - The target Route Object being navigated to.
 * @param from - The current Route Object being navigated away from.
 * @param next - A function to be called to resolve the navigation. It can be called with a path to redirect to or without arguments to proceed.
 *
 * If the target route is `/login`, the navigation is allowed to proceed. If the user is not authenticated (i.e., the token is not present in the user configuration), the user is redirected to the `/login` route. Otherwise, the navigation is allowed to proceed.
 */
export const beforeEach:NavigationGuardWithThis<unknown> = (to, form , next) => {
  if(to.path === '/login') {
    return next()
  }
  const userStore = useUserStore()
  if(!userStore.token) {
    next('/login')
  } else {
    next()
  }
}


export const afterEach:NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, failure?: NavigationFailure | void) => {
}
