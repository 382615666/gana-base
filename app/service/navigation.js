import Navigation from '../model/navigation'
import util from '../../util/util'

const getNavigation = async (params) => {

}

const addNavigation = async (params) => {
    console.log(new Navigation(params).save())
    return await util.toPromise(callback => {
        new Navigation(params).save(callback)
    })
}

export default {
    addNavigation
}