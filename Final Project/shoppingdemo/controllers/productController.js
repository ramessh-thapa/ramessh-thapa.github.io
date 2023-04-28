const Product = require('../models/product');

exports.save = (req, res, next) => {
    const addedProd = new Product(null, req.body.title, req.body.description, req.body.price).save();
    res.status(201).json(addedProd);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.deleteById = (req, res, next) => {
    res.json(Product.deleteById(req.params.productId));
}

exports.edit = (req, res) => {
    const editedProd = new Product(req.params.productId, req.body.title, req.body.description, req.body.price).edit();
    res.json(editedProd);
}

exports.placeOrder= (req, res) => {
    const requestedItem = req.body;
    const retVal =[]
    for (const item of requestedItem) {
        const product = Product.getById(item.id);
        if (item.orderCount > product.quantity) {
          return res.status(400).send('Order cannot be placed more than stock');
        }
    
        product.quantity -= item.orderCount;
        product.edit();
        retVal.push({ ...product, quantity: item.quantity });
      }
    
      res.status(201).json({ retVal });

}