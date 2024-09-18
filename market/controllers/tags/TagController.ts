import { Request, Response } from "express";
import TagService from "../../services/tags/TagService";

class TagController {
  async getAll(req: Request, res: Response) {
    const tags = await TagService.getAll();
    res.json(tags);
  }

  async getById(req: Request, res: Response) {
    const tag = await TagService.getById(parseInt(req.params.id, 10));
    res.json(tag);
  }

  async create(req: Request, res: Response) {
    const newTag = await TagService.create(req.body);
    res.status(201).json(newTag);
  }

  async update(req: Request, res: Response) {
    const updatedTag = await TagService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedTag);
  }

  async delete(req: Request, res: Response) {
    await TagService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }
}

export default new TagController();
