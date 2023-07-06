import express from "express";
import {
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

export default router;
