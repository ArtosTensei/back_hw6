import { ProductTag } from "../../models/productTags/ProductTag";

class ProductTagRepository {
  async getAll() {
    return ProductTag.findAll();
  }

  async getById(id: number) {
    return ProductTag.findByPk(id);
  }

  async create(productTagData: any) {
    return ProductTag.create(productTagData);
  }

  async update(id: number, productTagData: any) {
    const productTag = await ProductTag.findByPk(id);
    if (productTag) {
      return productTag.update(productTagData);
    }
    return null;
  }

  async delete(id: number) {
    const productTag = await ProductTag.findByPk(id);
    if (productTag) {
      return productTag.destroy();
    }
    return null;
  }
}

export default new ProductTagRepository();
