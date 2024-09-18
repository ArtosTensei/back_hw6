import { Router } from "express";
import ProductRoutes from "./products/ProductRoutes";
import TagRoutes from "./tags/TagRoutes";
import PromotionRoutes from "./promotions/PromotionRoutes";
import OrderRoutes from "./orders/OrderRoutes";
import productTagRoutes from "./productTags/ProductTagRoutes";

const router = Router();

router.use("/products", ProductRoutes);
router.use("/tags", TagRoutes);
router.use("/promotions", PromotionRoutes);
router.use("/orders", OrderRoutes);
router.use("/productTags", productTagRoutes);

export default router;
