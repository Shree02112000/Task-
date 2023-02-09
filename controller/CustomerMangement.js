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
    Customer.findAll()
    .then((customer)=>{
        res.json({
            data:Customer,
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while listing the customer."
        });
});
}
//find by id
exports.findByPk =(req,res)=>{
    Customer.findByPk(req.params.id)
    .then((customer)=>{
        res.json({
            data:Customer
        })
    }) 
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while list the specific customer."
        });
});
}

//updatecustomer 
exports.update=(req,res)=>{
    const id = req.params.id;
    console.log(id)
    Customer.update(
            {
                customerName:req.body.customerName,
                customerEmail:req.body.customerEmail,
                phoneNumber:req.body.phoneNumber
    },
    {where:{id:req.params.id}}
    ).then(()=>{
        console.log("update",Customer)
        res.json({
            message:"customer update",
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the customer."
        });
});
}

//deletecustomer
exports.delete = (req,res)=>{
    const id = req.params.id;
    Customer.update({isDeleted:1},
       {where:{id:id}},
    ).then(()=>{
        res.json({
            message:"customer deleted"
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting  the customer."
        });
    })
}