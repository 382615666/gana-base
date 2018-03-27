import Router from 'koa-router'
import navigation from '../app/control/navigation'
const router = new Router()

router.get('/admin/navigation', navigation.getNavigation)
router.get('/admin/navigationAll', navigation.getAllNavigation)
router.post('/admin/navigation', navigation.addNavigation)
router.delete('/admin/navigation/:_id', navigation.removeNavigation)
router.put('/admin/navigation/:_id', navigation.updateNavigation)

router.get('/test/navigationAll', navigation.getAllNavigation)

export default router.routes()