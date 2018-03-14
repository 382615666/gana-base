import Router from 'koa-router'
import login from '../app/control/login'
const router = new Router()

router.get('/admin', login.toLogin)
router.get('/admin/index', login.toIndex)

router.get('/admin/login/:account/:password', login.getUser)

export default router.routes()