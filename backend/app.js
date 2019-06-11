const express = require('express');
const app = express()
const fs = require('fs')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({title : 'jjjjj'})
})

app.get('/produits', (req, res) => {
    let produits = fs.readFileSync('./data/produits.json', {encoding:'utf-8'})
    let produitsJson = JSON.parse(produits)
    res.json(produitsJson)
})

app.get('/programmes', (req, res) => {
    let programmes = fs.readFileSync('./data/programmes.json', {encoding:'utf-8'})
    let programmesJson = JSON.parse(programmes)
    res.json(programmesJson)
})

app.put('/produits', (req, res) => {
    var obj = {
        produits: []
     };
    fs.readFile('./data/produits.json', 'utf8', (err, produits) => {
        parsProduits = JSON.parse(produits); //now it an object
        let id = parsProduits.length
        var produit = {
            id: ++id,
            titre: req.body.titre,
            synopsis: req.body.synopsis,
            fileName: req.body.fileName,
            time: req.body.time
        }
        parsProduits.push(produit); //add some data
        json = JSON.stringify(parsProduits); //convert it back to json
        fs.writeFile('./data/produits.json', json, 'utf-8', (err, data) => {
            if(err) console.log(err)
        }); 
    });
        
    console.log('end');
    res.json({msg: 'ok'});
})

app.listen(3000, () => {
    let date = new Date();
    console.log('app is start: ', date)
})