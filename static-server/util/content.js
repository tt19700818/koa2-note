const path = require('path')
const fs = require('fs')
const dir = require('./dir')
const file = require('./file')

// 获取资源内容
async function content(ctx,fullStaticPath) {
    let reqPath = path.join(fullStaticPath,ctx.url)
    let exist = fs.existsSync(reqPath)

    let _content = ''
    if(!exist) {
        _content = '404'
    } else {
        let stat = fs.statSync(reqPath)
        if(stat.isDirectory()) {
            _content = dir(ctx.url,reqPath)
        } else {
            _content = await file(reqPath)
        }
    }

    return _content
}

module.exports = content