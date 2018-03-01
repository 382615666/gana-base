import Navigation from '../model/navigation'
import util from '../../util/util'

const getNavition = async(ctx, next) => {
    let v = new Navigation({
        name: '博客'
    })
    const navigation = await util.toPromise(callback => {
        Navigation.find({}, callback)
    }).catch(err => {
        ctx.body = {
            err: err
        }
    })
   ctx.body = user
}

export default {
    getNavition
}