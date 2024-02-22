import {Request, Response} from "express";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if the user exists
  // 2. create the user if it doesn't exist
  // 3. return the user object to the calling client

  try {
    const {auth0th} = req.body;
  }catch (error) {
    console.log(error);
    res.status(500).json({message: "Error creating user"})
  }
};

export default {
  createCurrentUser,
};