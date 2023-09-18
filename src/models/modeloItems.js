const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
    },

    description: {
        type: String
    }

   
});

//Crea el modelo de libros utilizando el esquema definido

const Item = mongoose.model("items",itemSchema);

//Exporta el modelo para que esté dis´ponible en otros archivos

module.exports = Item;