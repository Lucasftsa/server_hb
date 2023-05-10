const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('bd_dados','root','senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão show de bola...')
}).catch((error)=>{
    console.error('Deu certo não cria...')
})

module.exports = sequelize