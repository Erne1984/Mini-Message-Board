const mongoose = require("mongoose");

const connectCrudFuncionarios = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@crudfuncionario.ejji61w.mongodb.net/?retryWrites=true&w=majority&appName=crudFuncionario"
    ).then(() => {
        console.log("MongoDb Atlas CONECTADO!")
    }).catch((err) => console.log(err))
}

module.exports = connectCrudFuncionarios;