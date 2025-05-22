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

router.get('/categories', productController.getCategories);

//supplier routes
router.get('/suppliers', supplierController.getSuppliers);
router.post('/suppliers', supplierController.createSupplier);
router.put('/supplier/:id', supplierController.updateSupplier);
router.delete('/supplier/:id', supplierController.deleteSupplier);

// purchase orders routes
router.get('/orders', purchaseOrderController.getOrders);
router.post('/orders', purchaseOrderController.createOrder);
router.put('/order/:id', purchaseOrderController.updateOrder);
router.delete('/order/:id', purchaseOrderController.deleteOrder);

export default router;