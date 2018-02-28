import User from '../model/user'
import jwt from 'jsonwebtoken'
import key from '../../config/token-key'

export default {
    getUser () {
        var token = jwt.sign({aa:1}, key, {
            expiresIn: '2h'
        })
        console.log(token)
        var t = jwt.verify(token, key)
        console.log(t)
        let user = new User({
            account: 'admin',
            password: '123456'
        })
        User.findOne({
            account: 'admin',
            password: '123456'
        },(err, updatedTank) => {
            console.log(err)
            console.log(updatedTank)
        })
    }
}