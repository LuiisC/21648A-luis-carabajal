const router = require('express').Router();
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicacion,
    obtenerPublicaciones,
} = require('../controllers/blog.controllers');

// ====================================================
//          Rutas para manejar Vistas (views)
// ====================================================
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get('/mostrar', (req, res) => {
    res.render('mostrar')
})
router.get('/search-por-id', (req, res) => {
    res.render('busqueda')
})
router.get('/crear-publicacion', (req, res) => {
    res.render('crear')
})
// ====================================================
//              Rutas para manejar Datos
// ====================================================
// Ruta para obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones);

// Ruta para obtener una publicación
router.get('/publicacion/:id', obtenerPublicacion);

// Ruta para crear nueva publicación
router.post('/publicacion/', crearPublicacion);

// Ruta para actualizar publicación
router.put('/publicacion/:id', actualizarPublicacion);

// Ruta para eliminar publicación
router.delete('/publicacion/:id', eliminarPublicacion);


module.exports = router;