import { Schema, model } from "mongoose";
const customerSchema = new Schema({
    index: {
        type: Number,
        required: true,
    },
}, { collection: "banking" });
const CustomerModel = model("kunden", customerSchema);
export default CustomerModel;
