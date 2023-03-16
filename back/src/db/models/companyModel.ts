import CompanyModel from "../schemas/companySchema.js";

class Company {
    static async createCompany(){
        CompanyModel.create();
    }
}

export default Company;