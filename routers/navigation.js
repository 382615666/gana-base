import Router from 'koa-router'
import navigation from '../app/control/navigation'
const router = new Router()

router.get('/navigation', navigation.getNavigation)
router.get('/admin/navigation', function (ctx ,next) {
    console.log(ctx.params)
    ctx.body = '111111'
})


export default router.routes()