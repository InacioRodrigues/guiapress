const Sequelize=require("sequelize")
const connection =require("../database/database")
const Category=require("../categories/Category")

const Article =connection.define('articles',{
    title:{
    type:Sequelize.STRING,
    allownull:false
   },slug:{
       type:Sequelize.STRING,
       allownull:false
    }, 
    body: {
        type: Sequelize.TEXT,
        allownull:false
    }
})

Category.hasMany(Article); // uma categoria tem muitos artigos
Article.belongsTo(Category); // um artigo pertence a uma categoria


module.exports=Article;