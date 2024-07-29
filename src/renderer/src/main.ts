import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'

setup()

function setup() {
  const app = createApp(App)

  setupRouter(app)

  setupStore(app)

  app.mount('#app')
}
