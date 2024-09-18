import express from "express";
import UserController from "../../controllers/users/UserController";

const router: express.Router = express.Router();

const controller: UserController = new UserController();

router.get("/me", controller.me);
router
  .route("/")
  .get(controller.get)
  .patch(controller.update)
  .delete(controller.delete);
router.route("/password").patch(controller.changePassword);
router.get("/getUser", (req: any, res: any) => {
  res.setHeader("User-Id", req.user.id);
  res.sendStatus(200);
});
export default router;
