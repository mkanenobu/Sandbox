import type { RequestHandler } from "express";
import dayjs from "dayjs";

export const requestLogger: RequestHandler = (req, res, next) => {
  const now = dayjs();
  console.log(`${now.format("YYYY/MM/DD HH:ss")}, ${req.method} ${req.path}`);
  next();
};
