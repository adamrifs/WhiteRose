const mongoose = require('mongoose')

const connectDB = () => mongoose.connect('mongodb+srv://rifsadam81_db_user:FZoe9JpMYUye9GSR@cluster0.oilwesb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('database connected succesfully')
})
.catch(err =>{
    console.log(err)
})
module.exports = connectDB