const db = require("../models");
const Customer =  db.customer;
const sequelize=require("sequelize");
const Op = sequelize.Op;

const handleError = (res, err) => {
    res.status(500).send({
      error: err.me
    });
  };
// create customer

exports.create =async (req,res)=>{
   await Customer.create({
        customerName:req.body.customerName,
        customerEmail:req.body.customerEmail,
        phoneNumber:req.body.phoneNumber
    }).then((Customer)=>{
        res.json({
            message:"customer created", Customer
        });
    })
    .catch(err => {
        handleError(res, err);
      });

};

//find all
exports.findAll = async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

   await Customer.findAll({
        where: {
            [Op.or]: [{customerName : { [Op.like]: `%${req.query.search}%` } }]
        },
    limit: pageSize,
    offset: (page - 1) * pageSize
  })
    .then((Customer)=>{
        res.json({
            data:Customer,
            page,
            pageSize
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
    .then((Customer)=>{
        res.json({
            data:Customer
        })
    }) 
    .catch(err => {
        handleError(res, err);
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
        handleError(res, err);
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
        handleError(res, err);
      });
}