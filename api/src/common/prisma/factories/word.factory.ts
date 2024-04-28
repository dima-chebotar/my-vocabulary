import { faker } from '@faker-js/faker';
import { Word } from '@prisma/client';
import {
  getFakeTranslationWords,
  ITranslationWordFactory,
} from './translation-word.factory';
import { MAX_TRANSLATION_WORDS } from '../constants';

export interface IWordFactory extends Pick<Word, 'word' | 'image' | 'audio'> {
  translationWords: {
    create: ITranslationWordFactory[];
  };
}

export function getFakeWords(count: number): IWordFactory[] {
  const data: IWordFactory[] = [];

  for (let i = 0; i < count; i++) {
    const item = {
      word: faker.word.noun(),
      image: faker.image.urlPicsumPhotos(),
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      translationWords: {
        create: getFakeTranslationWords(MAX_TRANSLATION_WORDS),
      },
    };
    data.push(item);
  }

  return data;
}
