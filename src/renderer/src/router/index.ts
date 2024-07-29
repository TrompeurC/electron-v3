import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";




export function setupRouter (app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.url),
    routes: [
    ]
  })
  app.use(router)
}
