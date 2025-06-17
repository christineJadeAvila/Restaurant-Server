import express from 'express'
import * as productController from "../controllers/productController.js"
import * as purchaseOrderController from "../controllers/purchaseOrderController.js"
import * as supplierController from "../controllers/supplierController.js"

const router = express.Router();

// product routes
router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);