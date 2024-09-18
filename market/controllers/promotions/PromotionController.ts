import { Request, Response } from "express";
import PromotionService from "../../services/promotions/PromotionService";

class PromotionController {
  async getAll(req: Request, res: Response) {
    const promotions = await PromotionService.getAll();
    res.json(promotions);
  }

  async getById(req: Request, res: Response) {
    const promotion = await PromotionService.getById(
      parseInt(req.params.id, 10)
    );
    res.json(promotion);
  }

  async create(req: Request, res: Response) {
    const newPromotion = await PromotionService.create(req.body);
    res.status(201).json(newPromotion);
  }

  async update(req: Request, res: Response) {
    const updatedPromotion = await PromotionService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedPromotion);
  }

  async delete(req: Request, res: Response) {
    await PromotionService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }
}

export default new PromotionController();
