const Joi = require("joi");
const {bodyParamsValidation} = require("./validator");


const addCustomerValidation = (req,res,next)=>{
    const schema = Joi.object({
    customerName: Joi.string().min(3).max(30).required(),
    customerEmail: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required()
    
  })
   return bodyParamsValidation(req,res,next,schema)
}

const updateCustomerValidation = (req,res,next)=>{
    const schema = Joi.object({
    customerName: Joi.string().min(3).max(30).required(),
    customerEmail: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required()
    
  })
   return bodyParamsValidation(req,res,next,schema)
}


module.exports={addCustomerValidation,updateCustomerValidation}