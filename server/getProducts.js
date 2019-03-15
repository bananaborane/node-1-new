const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) { //// if there is a query on the price of the item
        const filteredItems = products.filter((item)=>{return item.price >= parseInt(req.query.price)});
        return res.status(200).send(filteredItems)
    }
    res.status(200).send(products);
}

module.exports = getProducts;
