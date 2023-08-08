const express = require ('express');
const router = require('./server/routes/ciudadesRouter');
const app = express();
const connection = require ('./knexfile')['development'];
const database = require('knex')(connection);
const router = require ('./server/routes/router');

app.use(express.json());

app.use('/api', router);


// tabla_pruebas

app.get('/', (req, res)=>{
    res.json({
        saludo:"hello world"
    })
})

app.get('/tabla_pruebas', (req,res)=>{
    database('tabla_pruebas').then((usuario)=>{
        res.json(usuario)
    })
})



// USUARIOS

app.get('/usuario', (req,res)=>{
    database('usuario').then((usuario)=>{
        res.json(usuario)
    })
})

app.get('/usuario/:id', (req,res)=>{
    const {id} = req.params
    database('usuario')
    .where ({id_usuario: id})
    .then((usuario)=>{
        res.json(usuario)
    })
})

app.post('/usuario', (req,res)=>{
    const toCreate = req.body
    database('usuario').insert(toCreate)
        .then ((usuario)=>{
            res.json(usuario)
    })
})

app.put('/usuario/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('usuario')
        .where ({id_usuario: id})
        .update (toEdit)
        .then((ciudades)=>{
        res.json(ciudades)
    })
})

app.delete('/usuario/:id', (req,res)=>{
    const {id} = req.params
    database('usuario')
        .where ({id_usuario: id})
        .del()
        .then((usuario)=>{
            res.json(usuario)
    })
})



// PAISES

app.get('/paises', (req,res)=>{
    database('paises').then((paises)=>{
        res.json(paises)
    })
})

app.get('/paises/:id', (req,res)=>{
    const {id} = req.params
    database('paises')
    .where ({ id_pais: id})
    .then((paises)=>{
        res.json(paises)
    })
})

app.post('/paises', (req,res)=>{
    const toCreate = req.body
    database('paises').insert(toCreate)
        .then ((paises)=>{
            res.json(paises)
    })
})

app.put('/paises/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('paises')
        .where ({id_pais: id})
        .update (toEdit)
        .then((paises)=>{
        res.json(paises)
    })
})

app.delete('/paises/:id', (req,res)=>{
    const {id} = req.params
    database('paises')
        .where ({id_pais: id})
        .del()
        .then((cpaises)=>{
            res.json(cpaises)
    })
})



// HABILIDADES

app.get('/habilidades', (req,res)=>{
    database('habilidades').then((habilidades)=>{
        res.json(habilidades)
    })
})

app.get('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    database('habilidades')
    .where ({ id_habilidad: id})
    .then((habilidades)=>{
        res.json(habilidades)
    })
})

app.post('/habilidades', (req,res)=>{
    const toCreate = req.body
    database('habilidades').insert(toCreate)
        .then ((habilidades)=>{
            res.json(habilidades)
    })
})

app.put('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('habilidades')
        .where ({id_habilidad: id})
        .update (toEdit)
        .then((habilidades)=>{
        res.json(habilidades)
    })
})

app.delete('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    database('habilidades')
        .where ({id_habilidad: id})
        .del()
        .then((chabilidades)=>{
            res.json(chabilidades)
    })
})



// EMPRESAS

app.get('/empresas', (req,res)=>{
    database('empresas').then((empresas)=>{
        res.json(empresas)
    })
})

app.get('/empresas/:id', (req,res)=>{
    const {id} = req.params
    database('empresas')
    .where ({id_empresa: id})
    .then((empresas)=>{
        res.json(empresas)
    })
})

app.post('/empresas', (req,res)=>{
    const toCreate = req.body
    database('empresas').insert(toCreate)
        .then ((empresas)=>{
            res.json(empresas)
    })
})

app.put('/empresas/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('empresas')
        .where ({id_empresa: id})
        .update (toEdit)
        .then((empresas)=>{
        res.json(empresas)
    })
})

app.delete('empresas/:id', (req,res)=>{
    const {id} = req.params
    database('empresas')
        .where ({id_empresa: id})
        .del()
        .then((empresas)=>{
            res.json(empresas)
    })
})



// CIUDADES

app.get('/ciudades', (req,res)=>{
    database('ciudades').then((ciudades)=>{
        res.json(ciudades)
    })
})

app.get('/ciudades/:id', (req,res)=>{
    const {id} = req.params
    database('ciudades')
    .where ({ id_ciudad: id})
    .then((ciudades)=>{
        res.json(ciudades)
    })
})

app.get('/ciudades/:ciudad', (req,res)=>{
    const {ciudad} = req.params
    database('ciudades')
    .where ({nombre_ciudad: ciudad})
    .then((ciudades)=>{
        res.json(ciudades)
    })
})

app.post('/ciudades', (req,res)=>{
    const toCreate = req.body
    database('ciudades').insert(toCreate)
    .then ((ciudades)=>{
        res.json(ciudades)
    })
})

app.put('/ciudades/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('ciudades')
        .where ({id_ciudad: id})
        .update (toEdit)
        .then((ciudades)=>{
        res.json(ciudades)
    })
})

app.delete('/ciudades/:id', (req,res)=>{
    const {id} = req.params
    database('ciudades')
    .where ({ id_ciudad: id})
    .del()
    .then((ciudades)=>{
        res.json(ciudades)
    })
})


// FIND

// app.get('/find', (req,res)=>{
//     database('find').then((find)=>{
//         res.json(find)
//     })
// })

// app.post('/find', (req,res)=>{

//         const {id_usuario, id_empresa} = req.body
        
//         database('usuario')
//         .where ({id_usuario})
//         .then((usuario)=>{
//             res.json(usuario)
//         //    const datosUsuario = usuario
//         })

//         database('empresas')
//         .where ({id_empresa})
//         .then((empresas)=>{
//             res.json(empresas)
//             // const datosEmpresa = empresas
//         })

//         if(usuario.habilidad_usuario === empresas.habilidad_trabajo){

//             database('find').insert(
//                 {
//                     id_usuario,
//                     id_empresa
//                 }
//             )
//             .then ((find)=>{
//                 res.json(find)
//             })
//         }
// })

// match

// app.get('/match', (req,res)=>{

    // const {habilidad_usuario} = req.body

    // database('usuario')
    // .where ({habilidad_usuario: habilidad_usuario})
    // .then((usuario)=>{
    //     res.json(usuario)
    // })

    // const {habilidad_trabajo} = req.body

    // database('empresas')
    // .where ({habilidad_trabajo: habilidad_trabajo})
    // .then((empresas)=>{
    //     res.json(empresas)
    // })

    app.get('/match', async (req, res) => {
        try {
          const { habilidad_usuario, habilidad_trabajo } = req.body;
      
          const usuarios = await database('usuario').where({ habilidad_usuario:habilidad_usuario });
          const empresas = await database('empresas').where({ habilidad_trabajo:habilidad_trabajo });
          const habilidadComun = await database('habilidades').where({id_habilidad:habilidad_usuario});
      
          const resultadoCombinado = { usuarios, empresas, habilidadComun };
          res.json(resultadoCombinado);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error en el servidor' });
        }
      });


    // app.get('/match', async (req, res) => {
    //     try {
    //       const { habilidad_usuario, habilidad_trabajo } = req.body;
      
    //       const usuarios = await database('usuario').where({ habilidad_usuario:habilidad_usuario });
    //       const empresas = await database('empresas').where({ habilidad_trabajo:habilidad_trabajo });
      
    //       const resultadoCombinado = { usuarios, empresas };
    //       res.json(resultadoCombinado);
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).json({ error: 'Error en el servidor' });
    //     }
    //   });
    
    // En este caso, hemos utilizado la palabra clave async en la declaración de la función para indicar que esta es una 
    // función asincrónica. Luego, utilizamos await antes de las consultas a la base de datos para esperar a que se resuelvan 
    // antes de continuar con la ejecución del código.
    // Esta opción hace que el código sea más claro y legible, ya que elimina la necesidad de utilizar Promise.all() y las llamadas 
    // encadenadas a then(). Además, el bloque try...catch permite capturar cualquier error que pueda ocurrir en las consultas y manejarlo 
    // adecuadamente.
    // Espero que esta opción te sea útil. Recuerda que en ambos casos, es importante asegurarse de que la conexión a la base de datos y 
    // las consultas sean correctas para obtener los resultados deseados.

// 

app.listen(3000, ()=>{
    console.log('running on port 3000')
})