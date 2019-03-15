const products = require('../products.json');


const getProductById = (req, res)=>{
    const itemById = products.find(item => item.id == (req.params.id));
    if (!itemById){ //// if id does not exist
            return res.status(500).send('Item is not in list')
    } else {
    
    res.status(200).send(itemById)
    
    }
}


module.exports = getProductById;