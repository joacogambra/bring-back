const User = require('../models/User')

const controller = {
    create: async (req, res) => {
        try {
            let new_user = await User.create(req.body)
            res.status(201).json({
                id: new_user._id,
                success: true,
                message: 'user created'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        try {
            let readall = await User.find()
            res.status(200).json({
                response: readall,
                success: true,
                message: 'user find'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        let { id } = req.params
        try {
            let modified = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (modified) {
                res.status(200).json({
                    id: modified._id,
                    success: true,
                    message: 'user updated'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'user not found'
                })
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let userDelete = await User.findOneAndDelete({_id:id})
            if (userDelete){
                res.status(200).json({
                    id: userDelete._id,
                    success: true,
                    message: 'user deleted'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'user not found'
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

}

module.exports = controller