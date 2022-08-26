const ArchivedModel = require("../model/archived");


function getStart(request, response){
    // Get para comprobar desde Postman si la API Rest funciona

    let respuesta = {error: false, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function getArchived(request, response){
    // Si se pasase un id solamente, se mostraría ese concreto
    if(request.query.id){

        ArchivedModel.findById(request.query.id )
        .then((archived) => {
            console.log(archived);
            response.send(archived);
        })
        .catch((err) => {
            console.log(err);
        })
    // Al no recibir un ID, se muestran todos los datos, 
    // y con el sort.() se ordena por fecha de archivada 
    // (en el momento que se da al botón de archivar en la parte de News)
    }else{

        ArchivedModel.find({}).sort({archiveDate: -1})
        .then((archived) => {
            console.log(archived);
            response.send(archived);
        })
        .catch((err) => {
            console.log(err);
        })

    }

}

function postArchived(request, response){

    console.log(request.body);
    // new Date() para que salga en el momento de dar al botón de archivar desde News
    // el momento exacto/fecha en la que se ha archivado y se pueda ordenar
    let date = new Date();

    let archivedNuevo = new ArchivedModel({
        title: request.body.title,
        description: request.body.description,
        date: request.body.date,
        content: request.body.content,
        author: request.body.author,
        archiveDate: date
    })
    archivedNuevo.save()
    .then((archived) =>
    {
        console.log("Documento archivado correctamente");
        console.log(archived);
        response.send(archived);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function deleteArchived(request, response){

    console.log("request.query")
    console.log(request.query.id)

   ArchivedModel.findByIdAndDelete(request.query.id)
        .then(function(archived)
        {
            console.log("Correderamente Borrado")
            console.log(archived);
            response.send(archived)
        })
        .catch(function()
        {
            console.log("Error");
        })
    
}


module.exports = {getStart, getArchived, postArchived, deleteArchived}