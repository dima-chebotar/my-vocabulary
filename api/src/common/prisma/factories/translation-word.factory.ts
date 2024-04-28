import { faker } from '@faker-js/faker';
import { TranslationWord } from '@prisma/client';

export interface ITranslationWordFactory
  extends Pick<TranslationWord, 'ua' | 'es'> {}

export function getFakeTranslationWords(
  count: number,
): ITranslationWordFactory[] {
  const data: ITranslationWordFactory[] = [];

  for (let i = 0; i < count; i++) {
    const item = {
      ua: `ua-${faker.word.noun()}`,
      es: `es-${faker.word.noun()}`,
    };
    data.push(item);
  }

  return data;
}
