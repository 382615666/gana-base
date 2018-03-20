import service from '../service/navigation'
import util from '../../util/util'
const getNavigation = async (ctx, next) => {
    const page = util.parseToInt(ctx.query, ['pageSize', 'currentPage'])
    const data = await service.getNavigation({}, page.pageSize * (page.currentPage - 1), page.pageSize)
    page.total = await service.countNavigation()
    ctx.body = {data, page}
}
const addNavigation = async (ctx, next) => {
    const result = await service.addNavigation(ctx.request.body)
    ctx.body = result ? {data: result} : {err: '新增失败'}
}
const removeNavigation = async (ctx, next) => {
    const result = await service.removeNavigation(ctx.params)
    ctx.body = result ? {data: result} : {err: '删除失败'}
}

export default {
    getNavigation,
    removeNavigation,
    addNavigation
}