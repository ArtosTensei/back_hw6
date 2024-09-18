import PromotionRepository from "../../repositories/promotions/PromotionRepository";

class PromotionService {
  async getAll() {
    return PromotionRepository.getAll();
  }

  async getById(id: number) {
    return PromotionRepository.getById(id);
  }

  async create(promotionData: any) {
    return PromotionRepository.create(promotionData);
  }

  async update(id: number, promotionData: any) {
    return PromotionRepository.update(id, promotionData);
  }

  async delete(id: number) {
    return PromotionRepository.delete(id);
  }
}

export default new PromotionService();
