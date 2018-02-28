import mongoose from 'mongoose'
import db from './mongodb.config'

export default class Connection {
    connect () {
        console.log('connect mongodb...')
        // mongoose.connect(`mongodb://${db.account}:${db.password}@${db.ip}:${db.port}/${db.db}`)
        mongoose.connect(`mongodb://${db.ip}:${db.port}/${db.db}`)
        console.log('connect mongodb end....')
    }
}

