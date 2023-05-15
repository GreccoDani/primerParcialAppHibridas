import * as clientController from '../controllers/client.api.controller.js'
import express from 'express'

const route = express.Router()

route.get('/proyects/:idProyect/client', clientController.getClient)
// route.get('/proyects/:idProyect/client',clientController.getProyectClient)
route.get('/client/:idProyect/proyects', clientController.getProyectsClient);

route.post('/proyects/:idProyect/client',clientController.createClient)
    
export default route