import Navigation from '../model/navigation'

const countNavigation = (params = {}) => Navigation.find(params).count()

const getNavigation = (params = {}, skip = 0, limit = 10) => Navigation.find(params).skip(skip).limit(limit)

const addNavigation = (params) => new Navigation(params).save()

const removeNavigation = (params) => new Navigation(params).remove()

export default {
    countNavigation,
    addNavigation,
    removeNavigation,
    getNavigation
}