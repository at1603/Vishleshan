import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

const Users = mongoose.model('Users', userSchema)

export default Users