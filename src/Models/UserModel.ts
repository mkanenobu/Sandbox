import { PrismaPromise, User } from "@prisma/client";
import { AppModel } from "./AppModel";

export class UserModel extends AppModel {
  findUsers(): PrismaPromise<User[]> {
    return this.prisma.user.findMany({ where: { deletedAt: null } });
  }

  findUser(id: number): PrismaPromise<User | null> {
    return this.prisma.user.findFirst({ where: { id } });
  }
}
