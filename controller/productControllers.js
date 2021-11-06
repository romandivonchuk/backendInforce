const Product = require('../models/Product');



const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }

}

const updateById = async (req, res) => {

    try {
        const filter = { _id: req.body._id };
        const update = {...req.body};
        
        let product = await Product.findOneAndUpdate(filter, update, {
        new: true
        });

        res.json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }
}


const getProductById = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        res.json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }

}

const getLastProduct = async (req, res) => {

    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }

}

const deleteById = async (req,res) => {
    console.log("DELETE")
    try {
        const products = await Product.findByIdAndRemove(req.params.id);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }
}






const postNewProduct = async (req, res) => {
    
    console.log("POST!")
   
    try {
        await Product.insertMany([{...req.body}]);
        console.log('Data import success')
        res.json({message: "Data import success"})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: " Server Error" });
    }

}


module.exports = {
    getAllProducts, getProductById, postNewProduct,getLastProduct,deleteById, updateById
}