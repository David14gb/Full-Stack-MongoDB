const express = require("express")
const cors = require('cors')
const newsRouters = require("./routes/news.routers")
const archRouters = require("./routes/archived.routers")
const errorHandling = require("./error/errorHandling")

const app = express(); 

app.set("port", 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(newsRouters)
app.use(archRouters)

app.use(function(req, res, next)
    {
        res.status(404).json({error:true, 
                            codido: 404, 
                            message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;