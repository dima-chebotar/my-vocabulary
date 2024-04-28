import { Injectable, NotFoundException } from '@nestjs/common';
import { USER_NOT_FOUND_ERROR } from './users.constants';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserResponseDto } from './user.response.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        progres: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`${USER_NOT_FOUND_ERROR}: ${id}`);
    }

    const levels = await this.prisma.level.findMany({
      include: {
        topics: {
          include: {
            words: {
              include: {
                translationWords: true,
              },
            },
          },
        },
      },
    });

    return new UserResponseDto(user, levels);
  }
}
