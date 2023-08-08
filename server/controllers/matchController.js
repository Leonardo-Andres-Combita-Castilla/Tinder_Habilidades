// MATCH
const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

exports.getMatch = async (req, res) => {
       
    try {
      const { nombre_emp } = req.body;
      const empresas = await database('empresas').where({ nombre_emp:nombre_emp });

      const empresa = empresas[0];

      const usuario = await database('usuario');      
      
      const usuariosMatch = [];
      
      usuario.forEach(usuario => {
        if(usuario.habilidad_usuario === empresa.habilidad_trabajo 
            && usuario.id_pais === empresa.pais_trabajo 
            && usuario.id_ciudad === empresa.ciudad_trabajo){
            usuariosMatch.push(usuario)
        }
      });
  
      const resultadoCombinado = { empresa, usuariosMatch };
      res.json(resultadoCombinado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };



