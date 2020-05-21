const Koa = require('koa')
const app = new Koa()
const loggerAsync  = require('./middleware/logger-async')

app.use(loggerAsync())

app.use(( ctx ) => {
    ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the server is starting at port 3000')
