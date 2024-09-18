import { Router } from "express";
import UserRoutes from "./users/UserRoutes";
import AuthRoutes from "./auth/AuthRouters";
import { auth } from "../middlewares/auth";
const router = Router();

router.use("/users", auth, UserRoutes);
router.use("/", AuthRoutes);

export default router;
