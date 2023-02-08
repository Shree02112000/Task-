const db = require("../models");
const Customer =  db.customer;
const Op = db.sequelize.Op;

// create customer

exports.create =async (req,res)=>{
   await Customer.create({
        customerName:req.body.customerName,
        customerEmail:req.body.customerEmail,
        phoneNumber:req.body.phoneNumber
    }).then((customer)=>{
        res.json({
            message:"customer created"
        });
    })
    .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the customer."
            });
    });
};

//find all
exports.findAll = (req,res)=>{
    customer.findAll()
    .then((customer)=>{
        res.json({
            data:Customer,
        })
    })
}
//find by id
exports.findByPk =(req,res)=>{
    customer.findByPk(req.params.id)
    .then((customer)=>{
        res.json({
            data:Customer
        })
    })
}

//updatecustomer 
exports.update=(req,res)=>{
    const id = req.params.id;
    console.log(id)
    customer.update(
            {
                customerName:req.body.customerName,
                customerEmail:req.body.customerEmail,
                phoneNumber:req.body.phoneNumber
    },
    {where:{id:req.params.id}}
    ).then(()=>{
        console.log("update",customer)
        res.json({
            message:"customer update",
        });
    });
}

//deletecustomer
exports.delete = (req,res)=>{
    const id = req.params.id;
    customer.destroy({
        where:{id:id},
    }).then(()=>{
        res.json({
            message:"customer deleted"
        })
    })
}