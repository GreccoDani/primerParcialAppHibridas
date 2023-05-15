import express from 'express'

import RouteProyects from './RouteS/routes.js'
import apiProyects from './api/routes/proyect.api.routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json())

app.use(express.static('public'))

app.use('/', RouteProyects)
app.use('/api',apiProyects)




app.listen(2222, ()=>{
    console.log('server is running port 2222')
})