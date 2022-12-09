const express=require("express")
const app=express()
const bodyParser= require("body-parser")
const connection=require("./database/database")
  
const categoriesController=require("./categories/categoriesController")
const articlesController=require("./articles/articlesController")

const Article=require("./articles/Article")
const Category=require("./categories/category")

//view engine
app.set('view engine','ejs')

//static
app.use(express.static('public'))

//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/tinymce', express.static((__dirname, 'node_modules', 'tinymce')));

//banco de dados
try {
    sequelize.authenticate();
    console.error('Unable to connect to the database:', );
} catch (error) {
    console.log('conexão activada com sucesso.');
}

app.use("/",categoriesController);
app.use("/",articlesController);

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(8080,()=>{
    console.log("O servidor está rodando")
})
