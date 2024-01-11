
import express from 'express'
import { deleteProduct, getProduct, getProducts, postProduct } from '../Controller/product.js'
const router=express.Router()
router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',postProduct)
router.delete('/:id',deleteProduct)
export default router