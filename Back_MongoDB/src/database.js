const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://david:contrasena@cluster0.o2lmmud.mongodb.net/mongodbNewsAndArchived',
{useNewUrlParser: true, useUnifiedTopology: true})
.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error);
})