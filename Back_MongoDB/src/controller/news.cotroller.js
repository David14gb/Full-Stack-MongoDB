const DocumentModel = require("../model/documents");


function getStart(request, response){
    // Get para comprobar desde Postman si la API Rest funciona

    let respuesta = {error: false, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function getDocument(request, response){
    // Si se pasase un id solamente, se mostraría ese concreto
    if(request.query.id){

        DocumentModel.findById(request.query.id )
        .then((document) => {
            console.log(document);
            response.send(document);
        })
        .catch((err) => {
            console.log(err);
        })
    // Al no recibir un ID, se muestran todos los datos, 
    // y con el sort.() se ordena por fecha de almacenamiento
    // (en el momento que se mete a la base de datos)
    }else{

        DocumentModel.find({}).sort({date: -1})
        .then((document) => {
            console.log(document);
            response.send(document);
        })
        .catch((err) => {
            console.log(err);
        })

    }

}

function postDocument(request, response){

    console.log(request.body);
    // new Date() para que salga el momento exacto/fecha en la que se ha creado la noticia
    // en la base de datos y se pueda ordenar
    let date = new Date();

    let documentNuevo = new DocumentModel({
        title: request.body.title,
        description: request.body.description,
        date: date,
        content: request.body.content,
        author: request.body.author,
        archiveDate: request.body.archiveDate
    })
    documentNuevo.save()
    .then((document) =>
    {
        console.log("Documento creado correctamente");
        console.log(document);
        response.send(document);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function deleteDocument(request, response){

   DocumentModel.findByIdAndDelete(request.query.id)
        .then(function(document)
        {
            console.log("Correderamente Borrado")
            console.log(document);
            response.send(document)
        })
        .catch(function()
        {
            console.log("Error");
        })
    
}


module.exports = {getStart, getDocument, postDocument, deleteDocument}

