import ProductRepository from "../../repositories/products/ProductRepository";
import Product from "../../models/products/Product";

class ProductService {
  async getAll() {
    return ProductRepository.getAll();
  }

  async getById(id: number) {
    return ProductRepository.getById(id);
  }

  async create(productData: any) {
    return ProductRepository.create(productData);
  }

  async update(id: number, productData: any) {
    return ProductRepository.update(id, productData);
  }

  async delete(id: number) {
    return ProductRepository.delete(id);
  }
}

export default new ProductService();
