//Importar
const express = require ('express');

//Definir el puerto
const port = 3000;

//Creamos una instancia de Express
const app = express();

//Construir las reglas de mi servidor
app.get ('/', (req,res) => {

    // JSON de Tareas
    const tareas = [
        {
            "id": 1,
            "completed":false,
            "description":"Realiar modulo de Java Script",
        },
        {
            "id": 2,
            "completed":true,
            "description":"Realizar modulo de express",
        },
    
        {
            "id": 3,
            "completed":false,
            "description":"Hacer proyecto inegrador",
        }
    ]

    res.json(tareas)
})

//Encender mi servidor
app.listen (port, () => {
    console.log ('servidor corriendo')
})