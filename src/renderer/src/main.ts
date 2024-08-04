import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupVuetify } from './framework/setupVuetify'
import { setupRegisterComponent } from './components'


// 初始化程序
setup()

function setup() {
  const app = createApp(App)

  // 初始化路由
  setupRouter(app)

  // 初始化pinia
  setupStore(app)

  // 初始化组件
  setupVuetify(app)
  setupRegisterComponent(app)

  app.mount('#app')
}
