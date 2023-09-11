const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')

app.listen(3000, 
    console.log('Example app listening on port 3000!')
)

app.use(cors())


app.use(express.json())



app.get('/minombre', (req, res) => {
    res.send('mi nombres es Naldi Castro')
})


/* 
app.get('/fecha', (req,res)=> {
    const fecha = new Date().toString();
    res.send(fecha)
})



app.get("/productos", (req, res) => {
    const productos = '[{"hola": "hola"}, {"adios": "adios"}]'
    res.json(productos)
    }) 

    app.get('/usuarios', (req, res)=> {
        const usuarios = require('./usuarios.json')
        const soloNombres = usuarios.map(usuario => usuario.nombre)
        console.log((soloNombres))
        res.send(soloNombres)
    }) */


   /*  app.post('/productos', (req, res)=> {
        const productos = require('./productos.json')
        const productoNuevo = req.body 
        console.log(productoNuevo)
        productos.push(productoNuevo)
        fs.writeFileSync('./productos.json', JSON.stringify(productos))
        res.send('producto agregado')
    }) */

    app.get('/productos', (req, res)=> {
        const productos = require('./productos.json')
        res.json((productos))
    }) 

    app.post('/usuarios', (req, res) => {
        const usuarios = require('./usuarios.json')
        const nuevosUsuarios = req.body
        usuarios.push(nuevosUsuarios)
        fs.writeFileSync('./usuarios.json', JSON.stringify(usuarios))
        res.send('usuarios agregado')
    })

    app.delete('/productos/:id', (req, res) => {
        //
        const id = req.params.id;
        const productos = require('./productos.json')
        console.log(id)
        //selecciono el primer elemento cuyo id coincida con los parametros y lo saco
        const index = productos.findIndex(producto => producto.id == id)
        productos.splice(index, 1)
        fs.writeFileSync('./productos.json', JSON.stringify(productos))
        res.send('producto eliminado')


    })

    app.put('/usuarios/:nombre', (req, res) => {
        const nombre = req.params.nombre;
        const modificacion = req.body 
        const usuarios = require('./usuarios.json')
        const index = usuarios.findIndex(usuario => usuario.nombre == nombre)
        usuarios[index] = modificacion
        fs.writeFileSync('./usuarios.json', JSON.stringify(usuarios))
        res.send('usuario modificado')
    })

    app.get('/archivo', (req, res) =>{
        res.sendFile(__dirname + '/test.html')
        console.log(__dirname)
    })