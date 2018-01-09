const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router');

const app = new Koa()
const router = new Router()

const files = fs.readdirSync(`${__dirname}/routers`)
files.forEach(fileName => {
    require(`${__dirname}/routers/${fileName}`)(router)
})
app.use(router.routes())
app.listen(process.env.port || 3000)
