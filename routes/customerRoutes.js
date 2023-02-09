const route = require('express').Router()

const customer = require('../controller/CustomerMangement')
const validation=require("../validation/customer.validation")
const {errHandle}=require("../middleware/errhandler")

route.post('/create',validation.addCustomerValidation,errHandle,customer.create)
route.get('/getallcustomer/test',errHandle,customer.findAll)
route.get('/getcustomer/:id',errHandle,customer.findByPk)
route.put('/updatecustomer/:id',errHandle,validation.updateCustomerValidation,customer.update)
route.delete('/deletecustomer/:id',errHandle,customer.delete)

module.exports = route