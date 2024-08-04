import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import {  afterEach, beforeEach } from "./guards";




export function setupRouter (app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.url),
    routes: routes
  })
  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
  app.use(router)
}
