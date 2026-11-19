const{sequelize}=require('../models');

(async()=>{
    const force=process.argv.includes('--force') //szinkronizalas adat nelkul, ha van adat akkor delete
    try{
        await sequelize.sync({force})
        console.log('Táblák szinkronizálva')
    } catch(error){
        console.log('Sync hiba', error.message)
    }
    finally{
        await sequelize.close()
    }
})();