import type { App } from "vue";
import CustomAlert from './custom-alert/index.vue'
import HeaderTool from './header-tool/index.vue'

const components = [CustomAlert, HeaderTool]

export const setupRegisterComponent = (app: App) => {
  components.forEach(component => {
    app.component(component.name , component)
  })
}
