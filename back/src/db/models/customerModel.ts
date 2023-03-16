import CustomerModel from "../schemas/customerSchema.js";

class Customer {
    static async findCustomerInfo(){
        CustomerModel.find();
    }
}

export default Customer;