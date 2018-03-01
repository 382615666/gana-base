import Koa from 'koa'
import fs from 'fs'
import Connection from './util/db'

// 连接mongodb
const connection = new Connection()
connection.connect()

const app = new Koa()
fs.readdirSync(`${__dirname}/routers`).forEach(fileName => {
    app.use(require(`${__dirname}/routers/${fileName}`).default)
})


app.listen(process.env.port || 3000)
