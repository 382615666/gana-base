const toPromise = async (func) => {
    return await new Promise((resolve, reject) => {
        func((err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}
const parseToInt = (obj, [...names]) => {
    names.forEach(name => obj[name] = parseInt(obj[name]))
    return obj
}
export default {
    parseToInt,
    toPromise
}