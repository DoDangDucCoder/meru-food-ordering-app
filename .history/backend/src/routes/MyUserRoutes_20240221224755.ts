import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// /api/my/users
router.post("/", MyUserController.createCurrentUser)