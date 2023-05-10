const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'
/*------------------------Config express-----------------------------*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
/*----------------------config express-handlebars--------------------*/
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
/*-------------------------------------------------------------------*/

app.get('/listar', async (req,res)=>{
    const dados = await Usuario.findAll({raw:true})
    console.log(dados)
    console.log(dados.nome)
    console.log(dados[0].nome)
    console.log(dados[1].id)
    res.redirect('/')
})

app.get('/', (req,res)=>{
    res.end('Teste de dados')
})

/*-------------------------------------------------------------------*/
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Deu certo não cria'+error)
})
