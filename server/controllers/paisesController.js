const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

// PAISES

exports.getAllPaises = (req,res)=>{
    database('paises').then((paises)=>{
        res.json(paises)
    })
};

exports.getPaisesById = (req,res)=>{
    const {id} = req.params
    database('paises')
    .where ({ id_pais: id})
    .then((paises)=>{
        res.json(paises)
    })
};

exports.post_Paises = (req,res)=>{
    const toCreate = req.body
    database('paises').insert(toCreate)
        .then ((paises)=>{
            res.json(paises)
    })
};

exports.put_Paises = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('paises')
        .where ({id_pais: id})
        .update (toEdit)
        .then((paises)=>{
        res.json(paises)
    })
};

exports.delete_Paises = (req,res)=>{
    const {id} = req.params
    database('paises')
        .where ({id_pais: id})
        .del()
        .then((cpaises)=>{
            res.json(cpaises)
    })
};