import express from 'express'
import * as controller from '../controllers/proyect.controller.api.js'
import clientRoute from './client.api.routes.js'

const route = express.Router()

route.get('/proyects', controller.getProyects)

route.post('/proyects', controller.createProyect)

route.get('/proyects/:_id', controller.getProyectsById)
route.put('/proyects/:_id', controller.replaceProyect)
route.delete('/proyects/:_id', controller.deleteProyect)
  
route.use(clientRoute)
export default route