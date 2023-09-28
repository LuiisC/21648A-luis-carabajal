const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="160" width="240" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h4 class="p-1">ID: ${pub.id}<h4>
                    <h5>Título: ${pub.titulo}</h5>
                    <p>Contenido: ${pub.detalle}</p>
                    <p>Fecha: ${pub.fecha}</p>
                </div>
            </section>

        `
    })

    elementoHtml.innerHTML = secciones; 
}

const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#muestra-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})