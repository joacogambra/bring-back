const mongoose = require('mongoose')

let connection = async() => {
    try{
        mongoose.connect(
            process.env.LINK_DB,
            {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('connected')
    } catch (error){
        console.log(error.message)
    }
}

connection()