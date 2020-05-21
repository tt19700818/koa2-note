const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

// 异步读取文件
function render(url) {
    return new Promise ((resolve,reject) => {
        let pageUrl = `../view/${url}`
        fs.readFile(pageUrl, 'UTF-8', (err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function route(address) {
    let view = '404.html'
    switch(address) {
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        case '/404':
            view = '404.html'
            break
        default:
            break
    }
    let html = await render(view)
    return html
}

app.use(async(ctx) => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000)