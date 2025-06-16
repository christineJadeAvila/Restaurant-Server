import * as productService from "../services/productServices.js"

export const getProducts = async(req, res) => {
    try {
        const products = await productService.getProducts()
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const getCategories = async(req, res) => {
    try {
        const categories = await productService.getCategories()
        res.status(200).json(categories)
    } catch (error) {
        console.error('Error fetching categories:', error)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

// export const createProduct = async (req, res) => {
//     try {
//         const productData = req.body
//         const image = req.file?.filename
//         const newProduct = await productService.createProduct({productData, image})
//         res.status(200).json(newProduct)
//     } catch (error) { 
//         console.error('Error adding product:', error)
//         res.status(500).json({ message: 'Internal Server Error' })
//     }
// }

export const createProduct = async (req, res) => {
  try {
    const { product_name, price, categoryid } = req.body;

    console.log("CategoryID:", req.body.categoryid);

    const newProduct = await productService.createProduct({
      product_name,
      price,
      categoryid,
      image: req.file?.filename, // or req.file.filename if you store the filename
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const productData = req.body
        const updatedProduct = await productService.updateProduct(productId, productData);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json(updatedProduct)

    } catch (error) { 
        console.error('Error updating client:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const deleted = await productService.deleteProduct(productId)
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).send()

    } catch (error) { 
        console.error('Error deleting product:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}