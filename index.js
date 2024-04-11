const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')
conn()

const routes = require('./routes/routes')
app.use('/', routes)

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.listen(3000, function(){
    console.log("server up 3000 port")
});
