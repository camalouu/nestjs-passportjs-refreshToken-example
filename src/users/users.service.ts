import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: UserDto): Promise<any> {
    return await this.prisma.user.create({ data })
  }

  async findAll(): Promise<any> {
    return await this.prisma.user.findMany()
  }

  async findById(id: number): Promise<any> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async findByUsername(username: string): Promise<any> {
    return await this.prisma.user.findUnique({ where: { username } })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto }
    })
  }

  async remove(id: number): Promise<any> {
    const user = await this.findById(id)

    return this.prisma.user.delete({ where: { id } })
  }
}
