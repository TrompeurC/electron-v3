
import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

ipcMain.on('setPosition', (event: IpcMainEvent, x: number, y: number) => {
  const win = BrowserWindow.fromWebContents( event.sender)!
  win.setPosition(x, y)
})
