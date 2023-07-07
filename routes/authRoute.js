import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  deleteUser,
  forgetPassword,
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

//FORGET PASSWORD || POST
router.patch("/forget-password", forgetPassword);

router.post("/", getUser);
router.delete("/:userId", deleteUser);

//protected route user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route admin auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
