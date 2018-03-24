import Router from 'koa-router'
import navigation from '../app/control/navigation'
const router = new Router()

router.get('/admin/navigation', navigation.getNavigation)
router.post('/admin/navigation', navigation.addNavigation)
router.delete('/admin/navigation/:_id', navigation.removeNavigation)
router.put('/admin/navigation/:_id', navigation.updateNavigation)

export default router.routes()