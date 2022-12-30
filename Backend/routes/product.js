const express = require('express');
const router = express.Router();

const {
	getProducts,
	newProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
	createProductReview,
	getProductReviews,
	deleteReview,
	addFavouriteProduct,
	getUserFavouriteProducts,
} = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.get('/products', getProducts);
router.post('/admin/product/new', newProduct);
router.get('/product/:id', getSingleProduct);
router.post('/addfavouriteproduct', addFavouriteProduct);
router.get('/getUserFavouriteProducts', getUserFavouriteProducts);
router.put('/admin/product/:id', isAuthenticatedUser, updateProduct);
router.delete('/admin/product/:id', isAuthenticatedUser, deleteProduct);

router.put('/review', isAuthenticatedUser, createProductReview);
router.get('/reviews', isAuthenticatedUser, authorizeRoles('admin'), getProductReviews);
router.delete('/review', isAuthenticatedUser, authorizeRoles('admin'), deleteReview);

module.exports = router;
