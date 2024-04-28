import { PrismaClient } from '@prisma/client';
import { Logger } from '@nestjs/common';
import { getFakeTopics } from './topic.factory';
import { faker } from '@faker-js/faker';
import { getFakeProgres } from './progres.factory';
import { MAX_LEVELS, MAX_TOPICS, MAX_USERS } from '../constants';

const prisma = new PrismaClient();
const logger = new Logger('FACTORY');

const runFactory = async (): Promise<void> => {
  if ((await prisma.user.count()) > 0) {
    return;
  }

  for (let i = 0; i < MAX_USERS; i++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName(),
        progres: {
          create: getFakeProgres(),
        },
      },
    });
  }

  for (let i = 0; i < MAX_LEVELS; i++) {
    await prisma.level.create({
      data: {
        title: `Level - ${i + 1}`,
        topics: {
          create: getFakeTopics(MAX_TOPICS),
        },
      },
    });
  }
};

runFactory()
  .then(async () => {
    await prisma.$disconnect();
    logger.log('The factory is completed.');
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default runFactory;
