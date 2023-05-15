import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")
const proyectsView = db.collection("Proyects")



async function getProyects(filter = {}){

    const filterProyect = { deleted: { $ne: true } } 
    
        if (filter?.technologies) {
            filterProyect.technologies = { $all: filter.technologies.split(';') }
      }   
        if(filter?.section){
            filterProyect.section = { $regex: filter.section }
        }


    
    await client.connect()
    return proyectsView.find(filterProyect).toArray()
}



async function getProyectById(idProyect){
    await client.connect()
    return db.collection("Proyects").findOne({ _id: new ObjectId(idProyect)})
}

async function createProyect(proyect){
    await client.connect()
    await db.collection("Proyects").insertOne(proyect)
    return proyect
}

async function replaceProyect(idProyect, proyect){
    await client.connect()
    await db.collection("Proyects").replaceOne({_id: new ObjectId(idProyect)}, proyect)
    return proyect

}

async function deleteProyect(idProyect){
    await client.connect()
    await db.collection("Proyects").deleteOne({_id: new ObjectId(idProyect)})
    return {
        id: idProyect
    }

}

async function editProyect(idProyect, proyect){
    await client.connect()
    await db.collection("products").updateOne({ _id: new ObjectId(idProyect) }, { $set: proyect })
    return proyect
}

async function getMobile() {
    await client.connect()
    return proyectsView.find({section: "mobile"}).toArray()
}

async function getLandingPage(){
    await client.connect()
    return proyectsView.find({section:"landing"}).toArray()
}

async function getWebAppPage(){
    await client.connect()
    return proyectsView.find({section:"webapp"}).toArray()
}

async function getEcommercePage(){
    await client.connect()
    return proyectsView.find({section:"ecommerce"}).toArray()
}

async function getGamePage(){
    await client.connect()
    return proyectsView.find({section:"game"}).toArray()
}



export{
    getMobile,
    getLandingPage,
    getWebAppPage,
    getEcommercePage,
    getGamePage,
    getProyects,
    getProyectById,
    replaceProyect,
    createProyect,
    deleteProyect,
    editProyect
}