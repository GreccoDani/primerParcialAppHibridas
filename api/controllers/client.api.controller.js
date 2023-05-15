import * as service from '../../service/service.client.js'

function getClient(req, res){
    const idProyect = req.params.idProyect

    service.getClient(idProyect)
    .then((client) => {
        if(client){
            res.json(client)
        } else {
         res.status(404).json({message: "Cliente no encontrado"})
        }
       
    })
}


function createClient(req, res){
const idProyect = req.body.idProyect
const client = {
    "nombre": req.body.nombre,
    "foto": req.body.foto,
    "descripcion": req.body.descripcion
}
service.createClient(idProyect, client)
.then((client) => {
    res.json(client)
})
}

function getProyectsClient(req, res){
    const idClient = req.params.idClient

    service.getProyectsClient(idClient)
    .then((clientProyect) => {
        if(clientProyect){
            res.json(clientProyect)
        } else {
            res.status(404).json({message: "Proyectos de cliente no encontrado"})
        }
       
    })
}

export {
    getClient,
    createClient,
    getProyectsClient
}