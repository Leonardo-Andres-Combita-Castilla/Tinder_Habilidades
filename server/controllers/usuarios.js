




// USUARIOS

exports.get('/usuario', (req,res)=>{
    database('usuario').then((usuario)=>{
        res.json(usuario)
    })
})

exports.get('/usuario/:id', (req,res)=>{
    const {id} = req.params
    database('usuario')
    .where ({id_usuario: id})
    .then((usuario)=>{
        res.json(usuario)
    })
})

exports.post('/usuario', (req,res)=>{
    const toCreate = req.body
    database('usuario').insert(toCreate)
        .then ((usuario)=>{
            res.json(usuario)
    })
})

exports.put('/usuario/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('usuario')
        .where ({id_usuario: id})
        .update (toEdit)
        .then((ciudades)=>{
        res.json(ciudades)
    })
})

exports.delete('/usuario/:id', (req,res)=>{
    const {id} = req.params
    database('usuario')
        .where ({id_usuario: id})
        .del()
        .then((usuario)=>{
            res.json(usuario)
    })
})