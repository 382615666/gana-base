import Koa from 'koa'
import fs from 'fs'

const app = new Koa()

const files = fs.readdirSync(`${__dirname}/routers`)
files.forEach(fileName => {
    app.use(require(`${__dirname}/routers/${fileName}`).default)
})


app.listen(process.env.port || 3000)
