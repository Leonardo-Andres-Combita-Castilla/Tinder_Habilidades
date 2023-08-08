




// PAISES

exports.get('/paises', (req,res)=>{
    database('paises').then((paises)=>{
        res.json(paises)
    })
})

exports.get('/paises/:id', (req,res)=>{
    const {id} = req.params
    database('paises')
    .where ({ id_pais: id})
    .then((paises)=>{
        res.json(paises)
    })
})

exports.post('/paises', (req,res)=>{
    const toCreate = req.body
    database('paises').insert(toCreate)
        .then ((paises)=>{
            res.json(paises)
    })
})

exports.put('/paises/:id', (req,res)=>{
    const {id} = req.params
    const toEdit = req.body
    database('paises')
        .where ({id_pais: id})
        .update (toEdit)
        .then((paises)=>{
        res.json(paises)
    })
})

exports.delete('/paises/:id', (req,res)=>{
    const {id} = req.params
    database('paises')
        .where ({id_pais: id})
        .del()
        .then((cpaises)=>{
            res.json(cpaises)
    })
})