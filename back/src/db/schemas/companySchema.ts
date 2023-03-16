import pkg, { Schema, model } from "mongoose";

const companySchema : Schema = new Schema(
  {
    index: {
      type: Number,
      required: true,
    },
  },
  { collection: "banking" },
);
const CompanyModel = model("company", companySchema);
export default CompanyModel;