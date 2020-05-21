const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

// 子路由1
let home = new Router()

home.get('/', async (ctx) => {
    let html = `
        <ul>
            <li><a href="/page/helloworld">home</a></li>
            <li><a href="/page/404">404</a></li>
        </ul>
    `
    ctx.body = html;
})

// 子路由2
let page = new Router()

page.get('/404', async (ctx) => {
    ctx.body = '404 page'
}).get('/helloworld', async (ctx) => {
    ctx.body = 'hello world'
})

// 装载子路由
let router = new Router()

router.use('/',home.routes(),home.allowedMethods())

router.use('/page',page.routes(),page.allowedMethods())

// 加载路由中间件

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
