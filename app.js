const express = require ('express');
const app = express();
const connection = require ('./knexfile')['development'];
const database = require('knex')(connection);
const router = require ('./server/routes/router');

app.use(express.json());

app.use('/api', router);


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