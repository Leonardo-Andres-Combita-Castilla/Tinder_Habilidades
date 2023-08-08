




// HABILIDADES

exports.get('/habilidades', (req,res)=>{
    database('habilidades').then((habilidades)=>{
        res.json(habilidades)
    })
})

exports.get('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    database('habilidades')
    .where ({ id_habilidad: id})
    .then((habilidades)=>{
        res.json(habilidades)
    })
})

exports.post('/habilidades', (req,res)=>{
    const toCreate = req.body
    database('habilidades').insert(toCreate)
        .then ((habilidades)=>{
            res.json(habilidades)
    })
})

exports.put('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('habilidades')
        .where ({id_habilidad: id})
        .update (toEdit)
        .then((habilidades)=>{
        res.json(habilidades)
    })
})

exports.delete('/habilidades/:id', (req,res)=>{
    const {id} = req.params
    database('habilidades')
        .where ({id_habilidad: id})
        .del()
        .then((chabilidades)=>{
            res.json(chabilidades)
    })
})