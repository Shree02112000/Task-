const route = require('express').Router()

const customer = require('../controller/CustomerMangement')

route.post('/create',customer.create)
route.get('/getallcustomer/test',customer.findAll)
route.get('/getcustomer/:id',customer.findByPk)
route.put('/updatecustomer/:id',customer.update)
route.delete('/deletecustomer/:id',customer.delete)

module.exports = route