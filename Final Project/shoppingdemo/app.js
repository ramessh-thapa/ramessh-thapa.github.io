const express = require('express');
const productRouter = require('./routes/productRouter');
const authenticationRouter = require('./routes/authenticationRouter');
const cors = require('cors');
const app = express();
const Token = require('./models/token');

app.use(cors());



app.use(express.json());

app.use(function(req, res, next) {
    // by passing login api call and images request for token validation
    if (req.path === '/login' || req.path.includes("/images")) {
      return next();
    }
    
    //validating tokens for each api request
    let token =  req.headers['x-access-token'];
    console.log(token);
    if(token && token != null && Token.validateToken(token))
    {
        next();
    } else{
        console.log("req.headers",req.headers)
        res.status(403).send("UnAuthorized access");
    }
  });

app.use('/login', authenticationRouter);
app.use('/products', productRouter);


app.listen(3000, ()=>console.log('listen on 3000'));

app.use(express.static('public'));
app.use('/images', express.static('images'));