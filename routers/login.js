import Router from 'koa-router'
const router = new Router()

router.get('/login', (ctx, next) => {
    ctx.redirect('/login.html')
})
router.get('/login/:accout/:password', (ctx, next) => {
    console.log(ctx.query)
    console.log(ctx.querystring)
})
export default router.routes()