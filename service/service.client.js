import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")
const proyectsClient = db.collection("Proyects")


async function getClient(idProyect){
    await client.connect()
    return proyectsClient.findOne({proyect_id: new ObjectId(idProyect)}) 
}


async function getProyectsClient(idClient){
        await client.connect()
        return proyectsClient.filter(({ proyect_id: id }) => id === idClient);
       
}


async function createClient(idProyect, cliente){
    await client.connect()

    const update = await proyectsClient.updateOne(
    { proyect_id: new ObjectId(idProyect)},
    {$push: { client: cliente}}
    )

    if(update.matchedCount == 0){
        await proyectsClient.insertOne({ 
            proyect_id: new ObjectId(idProyect),
            client: [cliente]
        })
            
    }
    return cliente
}



export {
    getClient,
    createClient,
    getProyectsClient
}