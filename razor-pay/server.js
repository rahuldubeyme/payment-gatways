const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/',require('./routes/index'));
app.use('/checkout',require('./routes/razorpay'));

let port = 1000;

app.listen(port,()=>{
    console.log('Server is running on port: ',port );
});