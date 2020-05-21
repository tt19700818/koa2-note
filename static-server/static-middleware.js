// 资源服务器使用中间件

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'


app.use(static(path.join(__dirname,staticPath)))

app.use( async ( ctx ) => {
    ctx.body = '静态资源'
})

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})