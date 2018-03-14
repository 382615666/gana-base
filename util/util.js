const toPromise = async (func) => {
    return await new Promise((resolve, reject) => {
        func((err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}
export default {
    toPromise
}