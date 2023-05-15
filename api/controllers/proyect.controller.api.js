import * as service from '../../service/services.js'





function getProyects(req, res){
    const filter = req.query //recien agregado
    // service.getProyects({deleted: true})
    service.getProyects(filter)
     .then((proyects)=>{
     res.status(200).json(proyects)
 })
}

function createProyect(req, res){
    // const proyect = req.body

    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        image: req.body.image,
        deleted: false,
        section: req.body.section,
        technologies: req.body.technologies
        
    }
   service.createProyect(proyect)
   .then(function (proyect) {
    res.status(201).json(proyect)
})
}

function getProyectsById(req, res){
    const idProyect = req.params.id

    service.getProyectById(idProyect)
        .then(function(proyect){

        if(proyect){
            res.status(200).json(proyect)
        } else {
        res.status(404).json({message: "Proyect not found"})
        }
    })
}

function replaceProyect(req, res){
    const idProyect = req.params.id

    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        image: req.body.image,
        deleted: false,
        section: req.body.section,
        technologies: req.body.technologies
        
    }
    service.replaceProyect(idProyect, proyect)
    // service.replaceProyect(idProyect, req.body) 
    .then(function (proyect) {
        if (proyect) {
            res.status(200).json(proyect)
        }
        else {
            res.status(404).json({message: "Proyect not found"})
        }
    })
}

function updateProyect(req, res) {
    const idProduct = req.params.id

    const proyect = {}

    if (req.body.name) {
        proyect.name = req.body.name
    }

    if (req.body.description) {
        proyect.description = req.body.description
    }

    if (req.body.technologies) {
        proyect.technologies = req.body.technologies
    }

    if (req.body.section) {
        proyect.section = req.body.section
    }

    service.editProyect(idProduct, proyect)
        .then(function (proyect) {
            if (proyect) {
                res.status(200).json(proyect)
            }
            else {
             res.status(404).json({message: "Proyect not found"})
            }
        })
}

function deleteProyect(req, res){
    const idProyect = req.params.id

    service.deleteProyect(idProyect)
        .then(function (proyect) {
            if (proyect) {
                res.status(200).json(proyect)
            }
            else {
                 res.status(404).json({message: "Proyect not found"})
            }
        })

}



export {
        getProyects,
        createProyect,
        getProyectsById,
        replaceProyect,
        deleteProyect,
        updateProyect
    }