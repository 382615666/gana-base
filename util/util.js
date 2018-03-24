const toPromise = async (func) => {
    return await new Promise((resolve, reject) => {
        func((err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}
const parseToPage = (obj, [...names]) => {
    const page = {}
    names.forEach(name => page[name] = parseInt(obj[name]))
    return page
}
const calcPageStartIndex = (pageSize, currentPage) => pageSize * (currentPage - 1)
const parseToInt = (obj, [...names]) => {
    names.forEach(name => obj[name] = parseInt(obj[name]))
    return obj
}
const filterEmpty = (obj, [...names]) => {
    let temp = {}
    names.forEach(name => {
        if (obj[name]) {
            temp[name] = obj[name]
        }
    })
    return temp
}
const like = (obj, [...names]) => {
    const temp = Object.assign({}, obj)
    temp.$or = []
    names.forEach(name => {
        temp.$or.push({
            [name]: {
                $regex: new RegExp(temp[name], 'i')
            }
        })
        delete temp[name]
    })
    return temp
}
export default {
    calcPageStartIndex,
    parseToPage,
    filterEmpty,
    like,
    parseToInt,
    toPromise
}