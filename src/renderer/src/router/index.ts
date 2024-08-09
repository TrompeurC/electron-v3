import type { App } from "vue";
import { Router, createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import {  afterEach, beforeEach } from "./guards";


export let router: null | Router  = null

export function setupRouter (app: App) {
  router = createRouter({
    history: createWebHistory(import.meta.url),
    routes: routes
  })
  app.use(router)

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
}
