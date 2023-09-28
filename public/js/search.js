//Creo el evento en el formulario
const formBuscar = document.querySelector('#form-buscar');
formBuscar.addEventListener('submit', async (e) => {
    e.preventDefault();
    id_buscada = document.querySelector('#id_pub').value;

    //Obtengo la publicacion en base a la id
    const obtenerPublicacion = async (id_buscada) => {
    const response = await fetch(`/publicacion/${id_buscada}`)
    const data = await response.json()
    return data;
    }
    const pub = await obtenerPublicacion(id_buscada);
    
    //Comienzo a agregar los datos al resultado obteniendo el main
    main = document.querySelector('#resultado-busqueda');
    let secciones = `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="300" width="400" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h5>Título: ${pub.titulo}</h5>
                    <p>Contenido: ${pub.detalle}</p>
                    <p>Fecha: ${pub.fecha}</p>
                </div>
            </section>`;
    main.innerHTML = secciones;
})