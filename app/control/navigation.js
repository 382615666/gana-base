import service from '../service/navigation'
const getNavigation = async(ctx, next) => {

}

const addNavigation = async(ctx, next) => {
    const a = await service.addNavigation(ctx.request.body)
}

export default {
    getNavigation,
    addNavigation
}