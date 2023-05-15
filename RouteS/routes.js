import { Router } from 'express'
import * as controller from '../controller/controller.js'

const route = Router()

route.get('/', controller.getHome)
route.get('/mobile', controller.getMobile)
route.get('/webapp', controller.getWebApp)
route.get('/landing', controller.getLanding)
route.get('/ecommerce', controller.getEcommerce)
route.get('/game', controller.getGame)


export default route