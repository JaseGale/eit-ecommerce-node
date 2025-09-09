import express from "express"
import upload from "../utils/storage.js"
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct
} from "../controllers/productController.js"
import { validationErrorResponse } from "../middlewares/validateResponse.js"

const router = express.Router()

// Obtener productos
router.get("/", validationErrorResponse,getProducts)

// Crear producto con imagen
router.post("/", upload.single("img"), validationErrorResponse,createProduct )

// Actualizar producto
router.put("/edit/:id", validationErrorResponse, updateProduct)

// Eliminar producto
router.delete("/delete/:id", validationErrorResponse, deleteProduct)

export default router