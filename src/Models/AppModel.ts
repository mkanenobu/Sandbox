import { PrismaClient } from "@prisma/client";

export abstract class AppModel {
  constructor() {}

  get prisma() {
    return new PrismaClient();
  }
}
