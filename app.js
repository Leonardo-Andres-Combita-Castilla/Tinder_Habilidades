const express = require ('express');
const app = express();
// const connection = require ('./knexfile')['development'];
// const database = require('knex')(connection);
const router = require ('./server/routes/router');
// const router = express.Router();

app.use(express.json());

app.use('/api', router);


// FIND

    // app.get('/match', async (req, res) => {
       
    //     try {
    //       const { nombre_emp } = req.body;
    //       const empresas = await database('empresas').where({ nombre_emp:nombre_emp });

    //       const empresa = empresas[0];

    //       const usuario = await database('usuario');      
          
    //       const usuariosMatch = [];
          
    //       usuario.forEach(usuario => {
    //         if(usuario.habilidad_usuario === empresa.habilidad_trabajo 
    //             && usuario.id_pais === empresa.pais_trabajo 
    //             && usuario.id_ciudad === empresa.ciudad_trabajo){
    //             usuariosMatch.push(usuario)
    //         }
    //       });
      
    //       const resultadoCombinado = { empresa, usuariosMatch };
    //       res.json(resultadoCombinado);
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).json({ error: 'Error en el servidor' });
    //     }
    //   });


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
    // Esta opción hace que el código sea más claro y legible.

// 

app.listen(3000, ()=>{
    console.log('running on port 3000')
})