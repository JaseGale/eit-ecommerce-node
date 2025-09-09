import mongoose from "mongoose"
import colors from "colors"

export const dbConection = async () => {
    try {
        const mongoDB = await mongoose.connect(process.env.BASE_URL_DB)
        console.log(colors.green("Se conectó satisfactoriamente a la BD de: "), mongoDB.connections[0].name)
    } catch (error) {
        console.error(colors.red("Error al conectar la BD."))
        throw Error(error)
    }
}