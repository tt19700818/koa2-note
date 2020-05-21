const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('@koa/cors')
const koaBody = require('koa-body')

router.get('/', ctx => {
    ctx.body = 'Hello world'
})

router.get('/api', ctx => {
    ctx.body = 'Hello Api'
})

router.get('/async', async (ctx) => {
    let result = await new Promise ((resolve) => {
        setTimeout( function() {
            resolve('1111')
        },2000)        
    })
    ctx.body = result 
})

app.use(koaBody())
app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

// app.use(async ctx => {
//     ctx.body = 'Hello world !'
// })

app.listen(3000)