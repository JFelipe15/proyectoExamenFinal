const express = require("express");

const app = express();

const config = require("./src/config/config.js");

const rutasIndex = require("./src/router/router.js");

const puerto = config.server.port || process.env.PORT 

app.use(express.json());

app.use("/apiItem",rutasIndex);

app.listen(puerto,()=>{
    console.log("servidor funcionando por el puerto " + config.server.port);
});