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
        isActive: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
          },
          isDeleted: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 0
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          createdDt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          updatedDt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          }
    },{timestamps:true})
return Customer
}