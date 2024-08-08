import { createPinia } from 'pinia';
import type { App } from 'vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

/**
 * Sets up the Pinia store for the given application.
 *
 * @param app - The application instance to which the Pinia store will be added.
 *
 * This function creates a Pinia instance, applies the Pinia persisted state plugin,
 * and then uses the Pinia store with the provided application.
 */
export function setupStore(app: App) {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
}
