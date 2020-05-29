/** @format */
import * as PIXI from 'pixi.js'
let app = new PIXI.Application({width: 256, height: 256})

// 把 Pixi 应用中创建出来的 canvas 添加到页面上
document.body.appendChild(app.view)
