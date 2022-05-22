const express = require("express");
const { Router } = express;

const productsRouter = new Router();

productsRouter.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log("supposed to add to data base: " + product.name);
    res.send("The product added succesfully" + product.name);
})

productsRouter.put("/updateProduct/:id", (req, res) => {
    const id = req.params.id;
    const product = req.body;
    console.log(product);
    console.log("suupposed to update the product:  " + id);
    res.send("the product was updated! " + id);
})

productsRouter.delete("/deleteProduct/:id", (req, res) => {
    const id = req.params.id;
    console.log("supposed to delete product: " + id);
    res.send("product deleted: " + id);
})


module.exports =  {productsRouter};