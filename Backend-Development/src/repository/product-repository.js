import Product from "../models/product";
import CrudRepository from "./crud-repository.js";


class ProductRepository extends CrudRepository {
  constructor() {
    super(Product);
  }

  async getProductByCategories(category){
    try {
        const product = await Product.findAll({categories : category});
        return product;
    } catch (error) {
        console.log('There is error in Product Repository', error);
    }
  }

  async getProductByBrand(brandName){
    try {
        const product = await Product.findAll({brand : brandName});
        return product;
    } catch (error) {
        console.log('There is error in Product Repository', error);
    }
  }




}

export default ProductRepository;
