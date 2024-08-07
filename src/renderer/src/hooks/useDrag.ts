import { Ref, onBeforeUnmount, onMounted } from "vue"


export default <T extends Ref<HTMLElement | undefined>>(eleRef: T) => {
  let isDragging = false, offset = { x: 0, y: 0 }

  const move = (event: MouseEvent) => {
    if (!isDragging) return
    window.api.setWindowPosition(event.screenX - offset.x, event.screenY - offset.y)
  }
  const mouseup = () => {
    isDragging = false
    offset = { x: 0, y: 0 }
  }
  const drag = () => {
    eleRef.value?.addEventListener('mousedown', (e) => {
      isDragging = true
      offset = { x: e.x, y: e.y }
    })
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', mouseup)


  onMounted(drag)
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', mouseup)
  })
}
