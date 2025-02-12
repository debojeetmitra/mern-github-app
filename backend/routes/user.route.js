import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepos);
//TODO=> GET LIKES
//TODO=> POST LIKE A PROFILE


export default router;