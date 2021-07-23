import type { RequestHandler } from "express";
import { AppController } from "./AppController";
import { UserModel } from "../Models/UserModel";

export class UserController extends AppController {
  user: UserModel;
  constructor() {
    super();
    this.user = new UserModel();
  }

  getUsers: RequestHandler = async (req, res) => {
    this.user.findUsers().then((users) => res.send(users));
  };

  getUser: RequestHandler = (req, res) => {
    const userId = req.params.userId;
    this.user.findUser(Number(userId)).then((v) => res.json(v));
  };
}
