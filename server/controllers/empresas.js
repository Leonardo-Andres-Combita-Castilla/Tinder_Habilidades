




// EMPRESAS

exports.get('/empresas', (req,res)=>{
    database('empresas').then((empresas)=>{
        res.json(empresas)
    })
})

exports.get('/empresas/:id', (req,res)=>{
    const {id} = req.params
    database('empresas')
    .where ({ id_empresa: id})
    .then((empresas)=>{
        res.json(empresas)
    })
})

exports.post('/empresas', (req,res)=>{
    const toCreate = req.body
    database('empresas').insert(toCreate)
        .then ((empresas)=>{
            res.json(empresas)
    })
})

exports.put('/empresas/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('empresas')
        .where ({id_empresa: id})
        .update (toEdit)
        .then((empresas)=>{
        res.json(empresas)
    })
})

exports.delete('empresas/:id', (req,res)=>{
    const {id} = req.params
    database('empresas')
        .where ({id_empresa: id})
        .del()
        .then((empresas)=>{
            res.json(empresas)
    })
})