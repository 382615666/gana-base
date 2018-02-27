import Router from 'koa-router'
const router = new Router()

router.get('/login', (ctx, next) => {
    ctx.redirect('/login.html')
})
router.get('/login/:accout/:password', (ctx, next) => {
    ctx.body = {
        message: 'success'
    }
})
export default router.routes()