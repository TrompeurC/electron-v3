import { BrowserWindow, IpcMainEvent, ipcMain } from "electron";


ipcMain.on('closeWin', (event:IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  win?.close();
})
