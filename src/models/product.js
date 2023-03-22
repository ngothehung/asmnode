import { boolean } from "joi";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : Number,
    desc : String,
    status : Boolean,
    quantity : Number,
})

export default mongoose.model("Product", productSchema);