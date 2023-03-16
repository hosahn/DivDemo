import pkg, { Schema, model } from "mongoose";

const customerSchema : Schema = new Schema(
  {
    index: {
      type: Number,
      required: true,
    },
  },
  { collection: "banking" },
);
const CustomerModel = model("kunden", customerSchema);
export default CustomerModel;