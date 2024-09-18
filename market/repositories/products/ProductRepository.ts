import { Product } from "../../models/products/Product";

class ProductRepository {
  async getAll() {
    return Product.findAll();
  }

  async getById(id: number) {
    return Product.findByPk(id);
  }

  async create(productData: any) {
    return Product.create(productData);
  }

  async update(id: number, productData: any) {
    const product = await Product.findByPk(id);
    if (product) {
      return product.update(productData);
    }
    return null;
  }

  async delete(id: number) {
    const product = await Product.findByPk(id);
    if (product) {
      return product.destroy();
    }
    return null;
  }
}

export default new ProductRepository();
