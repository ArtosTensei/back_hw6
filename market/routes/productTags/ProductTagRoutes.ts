import express, { Request, Response } from "express";
import ProductTagController from "../../controllers/productTags/ProductTagController";

const router: express.Router = express.Router();
const controller: ProductTagController = new ProductTagController();

router.route("/").post((req: Request, res: Response) => {
  controller.create(req, res);
});

router.route("/:id").delete((req: Request, res: Response) => {
  controller.delete(req, res);
});

export default router;
