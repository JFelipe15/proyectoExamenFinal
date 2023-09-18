const express = require("express");

const Item = require("../models/modeloItems.js");

const rutas = express.Router();

const connectDB = require("../connection/db.js");
connectDB();

//Traer información

rutas.get("/items",async(req,res)=>{
    const items = await Item.find(); //Busca todos los Items en la base de datos 
    res.json(items); //Devuelve la lista de Items en formato JSON
});

rutas.post("/items",async(req,res)=>{
    
    const {name,description} = req.body;

    const nuevoItem = new Item({
        name,
        description
    });

    nuevoItem.name = name;
    nuevoItem.description = description;

    await nuevoItem.save();
    res.json({"mensaje":"Item guardado con éxito"});
});

rutas.put("/items/:id",async(req,res)=>{
    const itemid = req.params.id;
    const {name,description}=req.body
    const itemEncontrado = await Item.findById(itemid);

    itemEncontrado.name = name;
    itemEncontrado.description = description;

    await itemEncontrado.save();
    res.json(itemEncontrado);
});

rutas.delete("/items/:id",async(req,res)=>{
    const itemid = req.params.id;
    const itemBuscado = await Item.findById(itemid);
    await itemBuscado.deleteOne();
    res.json("Item eliminado");
});

module.exports=rutas;