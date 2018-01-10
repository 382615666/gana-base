import Router from 'koa-router'
const router = new Router()

router.get('/:id', (ctx, next) => {
    console.log(ctx)
    ctx.body = {
        a: 1
    }
})

export default router.routes()