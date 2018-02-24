import Koa from 'koa'
import fs from 'fs'
import logger from 'log4js'

logger.configure({
    appenders: [{
        type: 'DateFile',
        filename: 'log',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'access'
    }]
})
const app = new Koa()


app.use(logger.connectLogger(logger.getLogger('access'), {level: logger.levels.INFO}))
fs.readdirSync(`${__dirname}/routers`).forEach(fileName => {
    app.use(require(`${__dirname}/routers/${fileName}`).default)
})


app.listen(process.env.port || 3000)
