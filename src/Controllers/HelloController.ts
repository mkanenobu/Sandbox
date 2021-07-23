import type { RequestHandler } from "express";
import { AppController } from "./AppController";

export class HelloController extends AppController {
  hello: RequestHandler = (req, res) => {
    res.send("Hello, World!");
  };
}
