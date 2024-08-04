import { ref } from 'vue'
import { VAlert } from 'vuetify/lib/components/index.mjs'

type AlertType = VAlert['type']

export interface AlertInfo {
  id: string,
  type: AlertType ,
  message: string
  visible: boolean
}

export const newAlert = ref<AlertInfo>({
  id: 'alert' + 0,
  type: undefined,
  message: '',
  visible: false
})

export const alert = (type: AlertType, message: string) => {
  newAlert.value.id = Math.random().toString()
  newAlert.value.type = type
  newAlert.value.message = message
  newAlert.value.visible = true
}


export const errorAlert = (message: string) => {
  alert('error', message)
}

export const successAlert = (message: string) => {
  alert('success', message)
}

export const infoAlert = (message: string) => {
  alert('info', message)
}

export const warningAlert = (message: string) => {
  alert('warning', message)
}
