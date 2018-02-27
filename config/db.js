import mongoose from 'mongoose'
import db from './mongodb.config'

export default class Connection {
    connect () {
        // mongoose.connect(`mongodb://${db.account}:${db.password}@${db.ip}:${db.port}/${db.db}`)
        mongoose.connect(`mongodb://${db.ip}:${db.port}/${db.db}`)
    }
}
