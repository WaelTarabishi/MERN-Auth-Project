import express from "express";
import {
  authUser,
  getUserProfile,
  logOuthUser,
  registerhUser,
  updateUserProfile,
} from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddelware.js";
const router = express.Router();

router.post("/", registerhUser);
router.post("/auth", authUser);
router.post("/logout", logOuthUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
