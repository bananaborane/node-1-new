const express = require('express');
const app = express();
const PORT = 3005;
const products = require('../products.json');
const getProducts = require('./getProducts')
const getProductById = require('./getProductById')

//// READ/GET only API
//// the concept is that clients can send GET requests and this file will handle those requests and send data according to what clients are asking for


//// METHOD: app.get, PATH: '/api/products' , HANDLER: a callback that looks like (req, res) => { code here }
app.get('/api/products', getProducts)
//// here, we set the http status to 200 and we send products (from products.json) out to the page ( ?? )


app.get('/api/products/:id', getProductById)




app.listen(3005, () => {console.log('server is still listening at port ' + PORT)})










