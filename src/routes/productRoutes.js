import express from 'express'

import * as productController from "../controllers/productController.js"
import * as purchaseOrderController from "../controllers/purchaseOrderController.js"
const router = express.Router();

// product routes
router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// purchase orders routes
router.get('/orders', purchaseOrderController.getOrders);
router.post('/orders', purchaseOrderController.createOrder);
router.put('/order/:id', purchaseOrderController.updateOrder);
router.delete('/order/:id', purchaseOrderController.deleteOrder);

export default router;