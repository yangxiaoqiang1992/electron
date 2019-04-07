const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const pkg = require('./package.json') // 引用package.json
let mainWindow

function createWindow () {
 let winConfig={
   width:1024,
   height:768,
   frame:false
 } 
//创建浏览器窗口,宽高自定义具体大小你开心就好
mainWindow = new BrowserWindow(winConfig);
mainWindow.show()
  //判断是否是开发模式
  if(pkg.DEV){
    mainWindow.loadURL("http://localhost:3000/")
    mainWindow.webContents.openDevTools()
  }else{
    mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  }
  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
   // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})