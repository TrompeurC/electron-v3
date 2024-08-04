import type { App } from "vue";
import CustomAlert from './custom-alert/index.vue'

const components = [CustomAlert]

export const setupRegisterComponent = (app: App) => {
  components.forEach(component => {
    app.component(component.name , component)
  })
}
