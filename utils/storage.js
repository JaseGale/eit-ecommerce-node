import multer from "multer"
//import path from "path";

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./temp/imgs") // Carpeta destino  
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}.jpg`)
  }
})

// Middleware multer
const upload = multer({ storage })

export default upload