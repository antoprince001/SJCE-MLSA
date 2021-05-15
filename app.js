const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('views'));


app.get('/',(req,res)=>{
    res.render('home',{ hello :'anto', l : [1,2,3]} );
});

app.get('/sample',(req,res)=>{
    res.render('sample',{ hello :'anto', l : [1,2,3]} );
});


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Started');  
});