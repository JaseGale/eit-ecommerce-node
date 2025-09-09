import { model, Schema } from "mongoose";

const CartSchema = new Schema ({

    car: {
        type:[{
            productsId: {
                type: Schema.Types.ObjectId,
                ref: "products",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        require: true
    }
}, {timestamps: true})

export const Cart = model("Cart", CartSchema)