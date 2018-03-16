import Router from 'koa-router'
import navigation from '../app/control/navigation'
const router = new Router()

router.get('/navigation', navigation.getNavigation)
router.post('/admin/navigation', navigation.addNavigation)


export default router.routes()