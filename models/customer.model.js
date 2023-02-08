module.exports=(sequelize,Sequelize)=>{
    const Customer = sequelize.define("customermanagement",{
        customerName:{
            type:Sequelize.STRING
        },
        customerEmail:{
            type:Sequelize.STRING
        },
        phoneNumber:{
            type:Sequelize.STRING
        },
        
    })
return Customer
}