import express from "express";
import ProfilesController from "../api/profiles.controller.js";

const router = express.Router();

router.route("/id/:id").get(ProfilesController.apiGetProfileById);
router.route("/all").get(ProfilesController.apiAllProfiles);
router.route("/create").post(ProfilesController.apiCreateProfile);
router.route("/update").put(ProfilesController.apiUpdateProfile);

export default router;
