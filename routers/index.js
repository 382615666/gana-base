import Router from 'koa-router'
const router = new Router()

router.get('/', (req, res) => {
    console.log('111111111')
})

export default router.routes()