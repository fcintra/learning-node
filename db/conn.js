const { Sequelize } = require('sequelize');

const newLocal = 'admin12';
const sequelize = new Sequelize('dbproject', 'root', newLocal, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

try{
    sequelize.authenticate();
    console.log('db conectado!')
}catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize