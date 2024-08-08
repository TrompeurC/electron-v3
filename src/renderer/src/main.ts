import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupVuetify } from './framework/setupVuetify'
import { setupRegisterComponent } from './components'
import { setupI18n } from './locales'


// 初始化程序
setup()

function setup() {
  const app = createApp(App)

  // 初始化路由
  setupRouter(app)

  // 初始化组件
  setupVuetify(app)
  // 初始化公共组件
  setupRegisterComponent(app)

  // 初始化pinia
  setupStore(app)
    // 初始化i18n
  setupI18n(app)

  app.mount('#app')
}
