import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
import Customer from "./models/customerModel.js";
import Company from "./models/companyModel.js";
dotenv.config();
const DB = process.env.MONGODB_URL || "No DB URL was set, please configure it in .env";
mongoose.connect(DB);
const db = mongoose.connection;

db.on("connected", () =>
  console.log("Connected to MongoDB.  " + DB),
);
db.on("error", error =>
  console.error("Connection Failed...\n" + DB+ "\n" + error),
);


export { Customer, Company }
