## React + Electron 仿百度网盘

### react项目环境搭建

这里使用react官方推荐的 `create-react-app` 脚手架工具搭建基础开发环境

#### 全局安装`create-react-app`脚手架
`npm install -g create-react-app`

#### 创建文件夹，并在当前目录生成项目
`create-react-app  project-name` 

#### 生成项目后，发现缺少webpack的配置文件，如果想要自己修改webpack之类的配置需要执行`npm run eject`弹出配置文件,此操作不可逆
`npm run eject`

#### 启动项目，浏览器打开3000端口 [http://localhost:3000](http://localhost:3000)
`npm start`

#### react项目通常需要配合 `react-router-dom` 和 `redux`, 分别用来路由和状态管理
`npm i react-router-dom redux`

#### 通常我们选择成开源的第三方ui库，这里可选的有蚂蚁金服的 `antd` 和微软的  `Material-UI`,这里选择 `antd`,更多详情请访问：[https://ant.design/index-cn](https://ant.design/index-cn)
`npm add antd`

到此，一个react项目环境搭建完成


### electron环境搭建

我们可以选择全局安装，执行 `npm install electron -g`,由于Electron安装包下载慢导致下载失败，windows平台的解决方式为：
在C盘找到 `\AppData\Local\electron\Cache`文件夹，访问淘宝镜像网站下载安装包 [https://npm.taobao.org/mirrors/electron/](https://npm.taobao.org/mirrors/electron/)对应操作系统下载对应zip，将下载的zip文件包拷贝到上述目录，然后继续安装`npm install electron`即可

#### 安装好electron之后，执行如下步骤

* 在根目录下（注意不是src目录）新建 `main.js`,判断开发环境下打开chrome调试工具`mainWindow.webContents.openDevTools()`方便调试
```
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
```
* package.json文件里，配置electron入口  `main`和 `homepage`参数
```
  "homepage": ".",
  "main": "main.js"
``` 
* 配置electron启动参数 
```
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "electron-start": "electron ."
  }
```
启动react之后，在cmd命令行下运行 `npm run electron-start`启动electron

至此，react和electron的开发环境搭建完成，electron将根据react项目热加载