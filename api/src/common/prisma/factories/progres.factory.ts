import { Progres } from '@prisma/client';
import { MAX_LEVELS, MAX_TOPICS } from '../constants';

export interface IProgresFactory
  extends Pick<Progres, 'complitedLevels' | 'complitedTopics'> {}

export function getFakeProgres(): IProgresFactory {
  const levelIds = getIds(MAX_LEVELS);
  return {
    complitedLevels: levelIds,
    complitedTopics: getIds(levelIds[levelIds.length - 1] * MAX_TOPICS),
  };
}

function getIds(value: number): number[] {
  const random = Math.floor(Math.random() * value + 1);

  return [...Array(random)].map((x, i) => i + 1);
}
