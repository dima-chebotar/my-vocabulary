import { Level, User } from '@prisma/client';

export class UserResponseDto {
  constructor(
    public user: User,
    public levels: Level[],
  ) {}
}
