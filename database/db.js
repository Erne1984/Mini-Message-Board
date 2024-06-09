const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect(
        "mongodb+srv://admin:root@cluster0.6zdebys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ).then(() => {
        console.log("MongoDb Atlas CONECTADO!")
    }).catch((err) => console.log(err))
}

module.exports = connectDb;