import { Request, Response } from "express";
import ProductTagService from "../../services/productTags/ProductTagService";

class ProductTagController {
  private service: ProductTagService;

  constructor() {
    this.service = new ProductTagService();
  }

  public async create(req: Request, res: Response) {
    try {
      const { productId, tagId } = req.body;
      const productTag = await this.service.create(productId, tagId);
      res.status(201).json(productTag);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.service.delete(Number(id));
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ProductTagController;
