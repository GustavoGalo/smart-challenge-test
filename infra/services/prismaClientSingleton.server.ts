import { PrismaClient } from "@splinter/prisma/client/index.js";

export class PrismaClientSingleton {
  private static instance: PrismaClientSingleton;
  private prisma = new PrismaClient();

  private constructor() {}

  public static getInstance() {
    if (!PrismaClientSingleton.instance)
      PrismaClientSingleton.instance = new PrismaClientSingleton();
    return PrismaClientSingleton.instance;
  }

  public getPrismaClient() {
    return this.prisma;
  }

  public async connect() {
    await this.prisma.$connect();
  }

  public async disconnect() {
    await this.prisma.$disconnect();
  }
}
