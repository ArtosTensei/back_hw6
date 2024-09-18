import { Request, Response } from "express";
import ProductService from "../../services/products/ProductService";

class ProductController {
  async getAll(req: Request, res: Response) {
    const products = await ProductService.getAll();
    res.json(products);
  }

  async getById(req: Request, res: Response) {
    const product = await ProductService.getById(parseInt(req.params.id, 10));
    res.json(product);
  }

  async create(req: Request, res: Response) {
    console.log(req.body);
    const newProduct = await ProductService.create(req.body);
    res.status(201).json(newProduct);
  }

  async update(req: Request, res: Response) {
    const updatedProduct = await ProductService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedProduct);
  }

  async delete(req: Request, res: Response) {
    await ProductService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }
}

export default new ProductController();
