const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);




// HABILIDADES

exports.getAllHabilidades = (req,res)=>{
    database('habilidades').then((habilidades)=>{
        res.json(habilidades)
    })
};

exports.getHabilidadesById=(req,res)=>{
    const {id} = req.params
    database('habilidades')
    .where ({ id_habilidad: id})
    .then((habilidades)=>{
        res.json(habilidades)
    })
};

exports.post_Habilidades = (req,res)=>{
    const toCreate = req.body
    database('habilidades').insert(toCreate)
        .then ((habilidades)=>{
            res.json(habilidades)
    })
};

exports.put_Habilidades = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('habilidades')
        .where ({id_habilidad: id})
        .update (toEdit)
        .then((habilidades)=>{
        res.json(habilidades)
    })
};

exports.delete_Habilidades = (req,res)=>{
    const {id} = req.params
    database('habilidades')
        .where ({id_habilidad: id})
        .del()
        .then((chabilidades)=>{
            res.json(chabilidades)
    })
};