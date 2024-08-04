import type { App } from "vue";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' //



export const setupVuetify = (app: App) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
  })
  app.use(vuetify)
}
