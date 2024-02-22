import express from "express";

const router = express.Router();

// /api/my/users
router.post("/", MyUserController.createCurrentUser)