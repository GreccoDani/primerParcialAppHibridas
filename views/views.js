 
 
function createPage(titulo, contenido) {
    let html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'

    html+= `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`
    html += `<link rel="stylesheet" href="../public/style/style.css">`
    html += '<title>' + titulo + '</title></head><body>'

    html += `<header class="mb-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
 
                <a class="navbar-brand" href="/">Proyects</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
             

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ">
                    <li class="nav-item text-center">
                        <a class="nav-link active" aria-current="page" href="/mobile">Mobile</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link active" aria-current="page" href="/landing">Landing Page</a>
                    </li>
                    <li class="nav-item text-center">
                    <a class="nav-link active" aria-current="page" href="/webapp">Web App</a>
                    </li>
                    <li class="nav-item text-center">
                    <a class="nav-link active" aria-current="page" href="/ecommerce">E-commerce</a>
                   </li>
                   <li class="nav-item text-center">
                    <a class="nav-link active" aria-current="page" href="/game">Games</a>
                  </li>
                    </ul>
                </div>
            </div>
            </nav>
           
            </header>`

    html += '<h1 class="text-center my-5 "> Bienvenido a mis proyectos </h1>'

    html += `<div class="text-center">`
    html += contenido
    html += `</div>`
    html += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>`
    html += '</body></html>'

    return html
}

function createHome(){

    let html = `<div class="text-center w-75 mx-auto ">
                    <p class="fs-2"> 
                        En esta web encontrarás algunos de mis trabajos realizados
                        en distintos lenguajes de programación y las tecnologias que fueron utilizadas.
                    </p>
                </div>`

    return createPage('Home', html)
}

function createSectionPage(proyects){
   let  html = `<div class="d-flex justify-content-evenly">`
        
        proyects.forEach(proyecto => {

        html +=` <div class="card mt-4 text-start rounded p-2" style="width: 300px;">
        
                    <img class="card-img-top" src="/imagenes/${proyecto.img}" alt="${proyecto.name}">
                  <h3 class="text-center">${proyecto.name}</h3>
                    <p>Section: ${proyecto.section}</p>
                    <p>${proyecto.description}</p> `
        html +=     `<ul>`
                    proyecto.technologies.forEach(tec => {
                        html += `<li>${tec}</li>`
                    });
        html +=     `</ul>`
        html +=` </div>`

    });
         html += `</div>`        
         return createPage('Mobile', html)
}



export {
    createPage,
    createSectionPage,
    createHome
    
     
}