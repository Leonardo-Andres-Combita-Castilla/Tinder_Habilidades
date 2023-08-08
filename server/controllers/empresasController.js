// EMPRESAS
const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);


exports.getAllEmpresas=(req,res)=>{
    database('empresas').then((empresas)=>{
        res.json(empresas)
    })
};

exports.getEmpresasById=(req,res)=>{
    const {id} = req.params
    database('empresas')
    .where ({ id_empresa: id})
    .then((empresas)=>{
        res.json(empresas)
    })
};

exports.post_Empresas=(req,res)=>{
    const toCreate = req.body
    database('empresas').insert(toCreate)
        .then ((empresas)=>{
            res.json(empresas)
    })
};

exports.put_Empresas=(req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('empresas')
        .where ({id_empresa: id})
        .update (toEdit)
        .then((empresas)=>{
        res.json(empresas)
    })
};

exports.delete_Empresas=(req,res)=>{
    const {id} = req.params
    database('empresas')
        .where ({id_empresa: id})
        .del()
        .then((empresas)=>{
            res.json(empresas)
    })
};