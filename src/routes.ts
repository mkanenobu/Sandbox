import type { RequestHandler } from "express";
import { HelloController } from "./Controllers/HelloController";
import { UserController } from "./Controllers/UserController";

type Method =
  | "all"
  | "get"
  | "post"
  | "put"
  | "delete"
  | "patch"
  | "options"
  | "head";

export const routes: Record<
  string,
  {
    method: Method;
    handler: RequestHandler;
  }
> = {
  "/hello": { method: "get", handler: new HelloController().hello },
  "/users": { method: "get", handler: new UserController().getUsers },
  "/users/:userId": { method: "get", handler: new UserController().getUser },
};
