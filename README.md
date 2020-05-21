<p align="center">
  <a href="https://github.com/NidhoggDJoking" target="_blank">
    <img width="180" src="https://raw.githubusercontent.com/NidhoggDJoking/VueCli/master/src/image/Logo/boy.png" alt="logo">
  </a>
</p>

<h1 align="center">Michty-ActionX</h1>

<p align="center">
  <a href="https://hx.dcloud.net.cn/README" target="_blank">
    <img src="https://img.shields.io/badge/HBuilderX-2.7%2B-brightgreen">
  </a>
</p>

## First Extension For HBuilderX :

开发文档参考：[https://hx.dcloud.net.cn](https://hx.dcloud.net.cn)

本示例使用步骤：

1.  打开本示例工程，点击工具栏的运行按钮，或者按下快捷键`Ctrl+r`，会打开一个新HBuilderX窗体，新窗体将加载这个插件
2.  在新窗体中打开一个文档，点右键，菜单底部会有一个新的菜单项`hello world`
3.  点击`hello world`，会弹出一个对话框
4.  在`extension.js`中可以修改插件的代码逻辑，在`package.json`中可以修改插件的配置
5.  修改这些代码或配置后，目前不支持热修改。需要点击工具栏的运行按钮，或者按下快捷键`Ctrl+r`，停止运行，然后再次重新运行。一般推荐连续按`Ctrl+r`

****
## package.json

```
{
    //注意，不能直接拷贝本段代码到编辑器中，package.json目前不支持注释。本段代码加的注释只是用于解释代码。
    //插件名称，必填字段
    "name": "your extension name",
    "description": "your extension description",
    //插件版本号，用于版本升级判断，必填字段
    "version": "0.0.0",
    "publisher": "your name",
    //需要的最低HBuilder版本号，必填字段
    "engines": {
        "HBuilderX": "^2.6.8"
    },
    //插件分类
    "categories": [
        "Other"
    ],
    //插件的程序入口js文件，在插件激活的时候调用
    "main": "./extension",
    //插件激活事件注册，当以下事件发生时，才会激活插件。
    "activationEvents": [
        //onCommand表示将要执行某个command的时触发该事件，本示例表示只有要执行`extension.helloWorld`的`命令`时本插件才会激活
        "onCommand:extension.helloWorld"
    ],
    //配置扩展点
    "contributes": {
        //`命令`扩展点，用于声明一个`命令`,所有扩展的`命令`必须通过该扩展点声明
        "commands": [{
            //`命令`唯一标识
            "command": "extension.helloWorld",
            //`命令`的名称，当关联到菜单时，如果未配置菜单名称，会用该名称。
            "title": "Hello World"
        }],
        //`菜单`扩展点，用于注册一个`菜单`
        "menus": {
            //编辑器右键菜单
            "editor/context": [
                {
                    //关联的`命令`唯一标识
                    "command": "extension.helloWorld",
                    //注册到菜单的位置
                    "group": "z_commands",
                    //在什么条件下显示
                    "when": "editorTextFocus"
                },
                {
                    //不关联`命令`的菜单扩展代表一个分割线
                    "group": "z_commands"
                }
            ]
        }
    },
    "dependencies": {}
}

```
### 试坑之路
```
hx.window.showInformationMessage

该标签支持HTML

```

## vue 转 nvue 功能

```
xxxxx
```

## 模板生成 功能

```
xxxxx
```
