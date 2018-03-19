import service from '../service/navigation'
const getNavigation = async(ctx, next) => {

}

const addNavigation = async(ctx, next) => {
    const result = await service.addNavigation(ctx.request.body)
    if (result) {
        ctx.body = {
            data: result
        }
    } else {
        ctx.body = {
            err: '新增失败'
        }
    }
}

export default {
    getNavigation,
    addNavigation
}