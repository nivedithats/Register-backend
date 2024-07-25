const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/db');
const Registerroutes = require('./routes/register');




const app = express();
connectDatabase(); 


app.use(bodyParser.json());
app.use(cors()); 



app.use('/api',Registerroutes)

app.use('/', (req, res)=>{
    res.json({message:'Welcome to Register backend API'})
})

app.listen(3005, ()=>{
    console.log('server is running at localhost:3005');
})