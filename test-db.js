const sequelize=require('./src/db/sequelize')

sequelize.authenticate()
    .then(()=> console.log('Kapcsolat OK'))
    .then((error)=> console.error('Hiba', error.message))
    .finally(()=>sequelize.close())