import Router from 'koa-router'
import login from '../app/control/login'
const router = new Router()

router.get('/login', login.toLogin)

router.get('/login/:account/:password', login.getUser)

export default router.routes()