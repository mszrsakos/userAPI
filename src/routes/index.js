const router=require('express').Router()

router.use('/users', require('./user.routes'))
// bovites ha uj entitast hozunk letre(pl termek, rendeles, etc)

module.exports=router