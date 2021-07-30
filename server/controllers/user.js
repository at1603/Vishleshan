import Users from "../models/user.js"

export const signup = async (req, res) => {
    const data = req.body
    const newUser = new Users(data)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const signin = async (req, res) => {

    try {
        console.log("trial")
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}