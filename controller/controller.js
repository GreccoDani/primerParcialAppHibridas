// import * as service from '../service/services.js'
import * as views from '../views/views.js'
import * as service from '../service/services.js'

function getHome(req, res){
    res.send(views.createHome())
}



function getMobile(req, res){
    service.getMobile()
    .then(function(proyectMobile){
        if (proyectMobile) {
            res.send(views.createSectionPage(proyectMobile))
        }
        else {
            res.send(views.createPage('Proyecto inexistente','<h2>EL proyecto no existe</h2>'))
        }
    })
}



function getLanding(req, res){
    service.getLandingPage()
        .then(function(proyectLanding){
            if(proyectLanding){
            res.send(views.createSectionPage(proyectLanding))
            } else {
                res.send(views.createPage('Proyecto inexistente','<h2>EL proyecto no existe</h2>'))
            }
        })
}


function getWebApp(req, res){
    service.getWebAppPage()
    .then(function(proyectWebApp){
        if(proyectWebApp){
        res.send(views.createSectionPage(proyectWebApp))
        } else {
            res.send(views.createPage('Proyecto inexistente','<h2>EL proyecto no existe</h2>'))
        }
    })
}

function getEcommerce(req, res){
    service.getEcommercePage()
    .then(function(proyectEcommerce){
        if(proyectEcommerce){
        res.send(views.createSectionPage(proyectEcommerce))
        } else {
            res.send(views.createPage('Proyecto inexistente','<h2>EL proyecto no existe</h2>'))
        }
    })
}

function getGame(req, res){
    service.getGamePage()
    .then(function(proyectGame){
        if(proyectGame){
        res.send(views.createSectionPage(proyectGame))
        } else {
            res.send(views.createPage('Proyecto inexistente','<h2>EL proyecto no existe</h2>'))
        }
    })
}
export {
    getHome,
    getMobile,
    getWebApp,
    getLanding,
    getEcommerce,
    getGame
}