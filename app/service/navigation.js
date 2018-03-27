import Navigation from '../model/navigation'
import util from '../../util/util'

const countNavigation = (params = {}) => Navigation.find(util.like(params, ['name'])).count()

const getNavigation = (params = {}, skip = 0, limit = 10) => Navigation.find(util.like(params, ['name'])).skip(skip).limit(limit)

const getAllNavigation = (params = {}) => Navigation.find(params)

const addNavigation = (params) => new Navigation(params).save()

const removeNavigation = (params) => new Navigation(params).remove()

const updateNavigation = (conditions, params) => Navigation.update(conditions, params)

export default {
    countNavigation,
    addNavigation,
    removeNavigation,
    updateNavigation,
    getAllNavigation,
    getNavigation
}