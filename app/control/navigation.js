import service from '../service/navigation'
import util from '../../util/util'

const getNavigation = async (ctx, next) => {
    const page = util.parseToPage(ctx.query, ['pageSize', 'currentPage'])
    const params = util.filterEmpty(ctx.query, ['name', 'rank'])
    page.total = await service.countNavigation(params)
    const data = await service.getNavigation(params, util.calcPageStartIndex(page.pageSize, page.currentPage), page.pageSize)

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
const updateNavigation = async (ctx, next) => {
    const result = await service.updateNavigation(ctx.params, ctx.request.body)
    ctx.body = result ? {data: result} : {err: '修改失败'}
}

export default {
    getNavigation,
    updateNavigation,
    removeNavigation,
    addNavigation
}