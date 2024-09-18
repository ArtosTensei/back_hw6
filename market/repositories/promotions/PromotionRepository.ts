import { Op } from "sequelize";
import { Promotion } from "../../models/promotions/Promotion";

class PromotionRepository {
  async getAll() {
    return Promotion.findAll();
  }

  async getById(id: number) {
    return Promotion.findByPk(id);
  }

  async create(promotionData: any) {
    return Promotion.create(promotionData);
  }

  async update(id: number, promotionData: any) {
    const promotion = await Promotion.findByPk(id);
    if (promotion) {
      return promotion.update(promotionData);
    }
    return null;
  }

  async delete(id: number) {
    const promotion = await Promotion.findByPk(id);
    if (promotion) {
      return promotion.destroy();
    }
    return null;
  }

  async getActivePromotionsForTag(tagId: number) {
    // Предположим, что акция активна, если ее дата начала меньше текущей даты, а дата окончания больше текущей даты.
    const now = new Date();
    return Promotion.findAll({
      where: {
        tagId,
        startDate: { [Op.lte]: now },
        endDate: { [Op.gte]: now },
      },
    });
  }
}

export default new PromotionRepository();
