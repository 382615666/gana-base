import Router from 'koa-router'
import navigation from '../app/control/navigation'
const router = new Router()

router.get('/navigation', navigation.getNavition)


export default router.routes()