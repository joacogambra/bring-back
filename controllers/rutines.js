const Rutine = require('../models/Rutine')

const controller = {
    create: async (req, res) => {
        try {
            let new_rutine = await Rutine.create(req.body)
            res.status(201).json({
                id: new_rutine._id,
                success: true,
                message: 'rutine created'
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
            let readall = await Rutine.find()
            res.status(200).json({
                response: readall,
                success: true,
                message: 'Rutine find'
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
            let modified = await Rutine.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (modified) {
                res.status(200).json({
                    id: modified._id,
                    success: true,
                    message: 'Rutine updated'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Rutine not found'
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
            let rutineDelete = await Rutine.findOneAndDelete({_id:id})
            if (rutineDelete){
                res.status(200).json({
                    id: rutineDelete._id,
                    success: true,
                    message: 'Rutine deleted'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Rutine not found'
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