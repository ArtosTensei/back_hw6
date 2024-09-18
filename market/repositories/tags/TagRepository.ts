import { Tag } from "../../models/tags/Tag";
import ProductTag from "../../models/productTags/ProductTag";

class TagRepository {
  async getAll() {
    return Tag.findAll();
  }

  async getById(id: number) {
    return Tag.findByPk(id);
  }

  async create(tagData: any) {
    return Tag.create(tagData);
  }

  async update(id: number, tagData: any) {
    const tag = await Tag.findByPk(id);
    if (tag) {
      return tag.update(tagData);
    }
    return null;
  }

  async delete(id: number) {
    const tag = await Tag.findByPk(id);
    if (tag) {
      return tag.destroy();
    }
    return null;
  }
  async getTagsByProductId(productId: number) {
    // Получаем теги, связанные с продуктом
    return Tag.findAll({
      include: [
        {
          model: ProductTag,
          where: { productId },
        },
      ],
    });
  }
}

export default new TagRepository();
