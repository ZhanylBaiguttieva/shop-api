import crypto from 'crypto';
import {Router} from 'express';
import {Product, ProductWithoutId} from "../types";
import fileDb from "../fileDb";
const productsRouter = Router();
productsRouter.get('/', async (req, res)=>{
    const products = await fileDb.getItems();
    res.send(products);
});

productsRouter.get('/:id', async (req, res)=>{
    const products = await fileDb.getItems();
    const product  = products.find(p => p.id === req.params.id);
    res.send(product);
});

productsRouter.post('/', async(req, res)=>{

    const product: ProductWithoutId = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
    };

    const newProduct = await fileDb.addItem(product);
    res.send(newProduct);
});

export default productsRouter;