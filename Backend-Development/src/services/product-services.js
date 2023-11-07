import ProductRepository from "../repository/product-repository.js";

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(data) {
    try {
      const response = await this.productRepository.create(data);
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async getAll() {
    try {
      const response = await this.productRepository.getAll();
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async get(id) {
    try {
      const response = await this.productRepository.get(id);
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async update(id, data) {
    try {
      const response = await this.productRepository.update(id, data);
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async deleteProduct(id) {
    try {
      const response = await this.productRepository.delete(id);
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async getProductByCategories(category){
    try {
        const response = await this.productRepository.getProductByCategories(category);
        return response;
    } catch (error) {
        console.log('There is error in Product Service', error);
    }
  }

  async getProductByBrand(brandName){
    try {
        const response = await this.productRepository.getProductByBrand(brandName);
        return response;
    } catch (error) {
        console.log('There is error in Product Service', error);
    }
  }

}

export default ProductService;