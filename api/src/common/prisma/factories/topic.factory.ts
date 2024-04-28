import { Topic } from '@prisma/client';
import { getFakeWords, IWordFactory } from './word.factory';
import { MAX_WORDS } from '../constants';

export interface ITopicFactory extends Pick<Topic, 'title'> {
  words: {
    create: IWordFactory[];
  };
}

export function getFakeTopics(count: number): ITopicFactory[] {
  const data: ITopicFactory[] = [];

  for (let i = 0; i < count; i++) {
    const item = {
      title: `Topic - ${i + 1}`,
      words: {
        create: getFakeWords(MAX_WORDS),
      },
    };
    data.push(item);
  }

  return data;
}
