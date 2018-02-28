import Router from 'koa-router'
import login from '../app/control/login'
const router = new Router()

router.get('/login', (ctx, next) => {
    ctx.redirect('/login.html')
})
router.get('/login/:accout/:password', (ctx, next) => {
    login.getUser()
    ctx.body = {
        message: 'success'
    }
})
export default router.routes()