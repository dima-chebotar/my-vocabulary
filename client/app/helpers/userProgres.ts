import { helper } from '@ember/component/helper';
import type { Topic } from 'client/types/user.type';

export default helper(function userProgres([topics, complitedTopics]: [
  Topic[],
  number[],
]): string | null {
  const topicsIds = topics.map((topic) => topic.id);
  const matches = countMatches(complitedTopics, topicsIds);

  if (matches === 0 || topicsIds.length === 0) return null;
  if (matches === topicsIds.length) return '100%';

  return `${Number((matches / topicsIds.length).toFixed(2)) * 100}%`;
});
const countMatches = (arr1: number[], arr2: number[]): number => {
  return arr1.filter((item) => arr2.includes(item)).length;
};
