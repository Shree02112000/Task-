const dbconfig = require("../config/db.config");
const Sequelize =  require("Sequelize");
const sequelize= new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});
const db ={};
db.Sequelize =Sequelize;
db.sequelize=sequelize;
db.customer=require("./customer.model")(sequelize,Sequelize);
module.exports=db;