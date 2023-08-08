// CIUDADES
const connection = require ('../../knexfile')['development'];
const database = require('knex')(connection);

exports.getAllCiudades = (req,res) => {
    database('ciudades').then((ciudades)=>{
        res.json(ciudades)
    })
};

exports.getCiudadesById = (req,res)=>{
    const {id} = req.params
    database('ciudades')
    .where ({ id_ciudad: id})
    .then((ciudades)=>{
        res.json(ciudades)
    })
};

// exports.get('/ciudades/:ciudad', (req,res)=>{
//     const {ciudad} = req.params
//     database('ciudades')
//     .where ({nombre_ciudad: ciudad})
//     .then((ciudades)=>{
//         res.json(ciudades)
//     })
// })

exports.post_Ciudades = (req,res)=>{
    const toCreate = req.body
    database('ciudades').insert(toCreate)
    .then ((ciudades)=>{
        res.json(ciudades)
    })
};

exports.put_Ciudades = (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('ciudades')
        .where ({id_ciudad: id})
        .update (toEdit)
        .then((ciudades)=>{
        res.json(ciudades)
    })
};

exports.delete_Ciudades = (req,res)=>{
    const {id} = req.params
    database('ciudades')
    .where ({ id_ciudad: id})
    .del()
    .then((ciudades)=>{
        res.json(ciudades)
    })
};