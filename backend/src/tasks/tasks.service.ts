import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  async complete(id: number) {
    const task = await this.prisma.task.update({
      where: { id },
      data: { completed: true },
    });
    return task;
  }

  async remove(id: number) {
    try {
      return await this.prisma.task.delete({ where: { id } });
    } catch {
      throw new NotFoundException('Task not found');
    }
  }
}
