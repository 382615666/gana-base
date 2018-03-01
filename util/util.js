const toPromise = async (func) => {
    return await new Promise((res, rej) => {
        func((err, data) => {
            err ? rej(err) : res(data)
        })
    })
}
export default {
    toPromise
}