import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
        category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String
    },
    largeDescription: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        required: true
    },
    freeDelivery: {
        type: Boolean,
        default: false
    },
    ageFrom: {
        type: Number
    },
    ageTo: {
        type: Number
    },
    img: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date
    }

}, {timestamps: true})


// Sustituimos ó renombramos  _id por id
ProductSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id
    }
}

)

export const Products = model("Product", ProductSchema)