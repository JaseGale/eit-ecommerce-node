/*import { Images } from "../models/Images.js"


export const getImage = async (req, res) => {
    const { idImage } = req.params
    try {
        const image = await Images.findById(idImage)
        const imgBuffer = Buffer.from(image.img.data)

        res.writeHead(200, {
            "Content-Type": image.img.contentType,
            "Content-Length": imgBuffer.length
        })
        res.end(imgBuffer)
    } catch (error) {
        console.log("Error interno:", error)
        res.status(500).json({
            ok: false,
            msg: "Error de servidor."
        })
    }
}*/

import { Images } from "../models/Images.js";

export const getImage = async (req, res) => {
  const { idImage } = req.params;

  try {
    // Verificar que el id sea válido (evita errores de CastError en Mongoose)
    if (!idImage || !idImage.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        ok: false,
        msg: "ID de imagen no válido",
      });
    }

    const image = await Images.findById(idImage);

    if (!image || !image.img) {
      return res.status(404).json({
        ok: false,
        msg: "Imagen no encontrada",
      });
    }

    const imgBuffer = Buffer.from(image.img.data);

    res.writeHead(200, {
      "Content-Type": image.img.contentType,
      "Content-Length": imgBuffer.length,
    });
    res.end(imgBuffer);
  } catch (error) {
    console.error("Error interno:", error);
    res.status(500).json({
      ok: false,
      msg: "Error de servidor.",
    });
  }
};