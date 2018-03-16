import Navigation from '../model/navigation'
import util from '../../util/util'


const addNavigation = async (params) => {
    return await util.toPromise(callback => {
        new Navigation(params).save(callback)
    })
}

export default {
    addNavigation
}