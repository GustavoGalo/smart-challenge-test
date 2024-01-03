import { PrismaClient } from "@prisma/client";
import { User, UserDTO } from "../../app/interfaces/entities/user";
import { Repository } from "../../app/interfaces/repositories/Repository";

export class UserRepository implements Repository<User, UserDTO> {
  constructor(private prismaClient: PrismaClient) {}

  public async listAll(): Promise<User[]> {
    const users = await this.prismaClient.user.findMany();

    return users;
  }

  public async getById(id: number): Promise<User | null> {
    const user = await this.prismaClient.user.findUnique({
      where: { id },
    });

    return user;
  }

  public async create(entity: UserDTO): Promise<User> {
    const user = await this.prismaClient.user.create({
      data: entity,
    });

    return user;
  }

  public async update(id: number, entity: UserDTO): Promise<User> {
    const user = await this.prismaClient.user.update({
      where: { id },
      data: entity,
    });

    return user;
  }

  public async delete(id: number): Promise<void> {
    await this.prismaClient.user.delete({ where: { id } });
  }
}
