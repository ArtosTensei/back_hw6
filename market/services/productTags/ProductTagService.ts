import ProductTag from "../../models/productTags/ProductTag";

class ProductTagService {
  public async create(productId: number, tagId: number) {
    return ProductTag.create({ productId, tagId });
  }

  public async delete(id: number) {
    return ProductTag.destroy({ where: { id } });
  }
}

export default ProductTagService;
