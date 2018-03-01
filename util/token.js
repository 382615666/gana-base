import jwt from 'jsonwebtoken'
import key from '../config/token-key'
import util from 'util'

const encodeToken = (obj) => {
    return jw.sign(obj, key, {
        expiresIn: '1day'
    })
}
const decodeToken = async (token) => {
    try {
        return await util.promisify(jwt.verify)(token, key)
    } catch (e) {
        return null
    }
}

export default {
    encodeToken,
    decodeToken
}
