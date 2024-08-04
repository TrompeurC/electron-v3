import type { NavigationFailure, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"

export const beforeEach:NavigationGuardWithThis<unknown> = (to, form , next) => {
  next()
}


export const afterEach:NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, failure?: NavigationFailure | void) => {
}
