module.exports=(sequelize,Sequelize)=>{
    const Customer = sequelize.define("customermanagement",{
        customerName:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        customerEmail:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
            valid:{
                notEmpty:true
            }
        },
        phoneNumber:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
            valid:{
                notEmpty:true
            }
        },
    
          isDeleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false
          }
    },{timestamps:true})
return Customer
}