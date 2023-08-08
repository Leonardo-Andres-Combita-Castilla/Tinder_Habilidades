const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

// USUARIOS

exports.getAllUsuarios = (req,res)=>{
    database('usuario').then((usuario)=>{
        res.json(usuario)
    })
};

exports.getUsuariosById = (req,res)=>{
    const {id} = req.params
    database('usuario')
    .where ({id_usuario: id})
    .then((usuario)=>{
        res.json(usuario)
    })
};

exports.post_Usuarios = (req,res)=>{
    const toCreate = req.body
    database('usuario').insert(toCreate)
        .then ((usuario)=>{
            res.json(usuario)
    })
};

exports.put_Usuarios = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('usuario')
        .where ({id_usuario: id})
        .update (toEdit)
        .then((ciudades)=>{
        res.json(ciudades)
    })
};

exports.delete_Usuarios = (req,res)=>{
    const {id} = req.params
    database('usuario')
        .where ({id_usuario: id})
        .del()
        .then((usuario)=>{
            res.json(usuario)
    })
};