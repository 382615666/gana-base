import User from '../model/user'
import util from '../../util/util'

const getUser = async(ctx, next) => {
    const user = await util.toPromise(callback => {
        User.findOne(ctx.params, callback)
    }).catch(err => {
        ctx.body = {
            err: err
        }
    })
    user ? ctx.body = user : ctx.body = {err: '用户名或密码错误！'}
}

const toLogin = (ctx, next) => {
    ctx.redirect('/login.html')
}

export default {
    getUser,
    toLogin
}