import express from 'express'
import multer from 'multer'
import * as productController from "../controllers/productController.js"
import * as purchaseOrderController from "../controllers/purchaseOrderController.js"
import * as supplierController from "../controllers/supplierController.js"

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${ext}`);
  }
});

const upload = multer({ storage });

// product routes
router.get('/products', productController.getProducts);
router.post('/createProduct', upload.single("image"), productController.createProduct);
router.put('/productUpdate/:id', upload.none(), productController.updateProduct);
router.delete('/product/delete/:id', productController.deleteProduct);

router.get('/categories', productController.getCategories);

//supplier routes
router.get('/suppliers', supplierController.getSuppliers);
router.post('/createSupplier', supplierController.createSupplier);
router.put('/suppliers/update/:id', supplierController.updateSupplier);
router.delete('/suppliers/delete/:id', supplierController.deleteSupplier);

// purchase orders routes
router.get('/orders', purchaseOrderController.getOrders);
router.post('/createOrder', purchaseOrderController.createOrder);
router.put('/orders/update/:id', purchaseOrderController.updateOrder);
router.delete('/orders/delete/:id', purchaseOrderController.deleteOrder);

export default router;