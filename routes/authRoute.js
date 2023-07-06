import express from "express";
import { requireSignIn } from "./../middleware/authMiddleware.js";
import {
  deleteUser,
  getUser,
  loginController,
  registerController,
} from "../controller/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.post("/", getUser);
router.delete("/:userId", deleteUser);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
