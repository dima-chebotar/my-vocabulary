import { helper } from '@ember/component/helper';

export default helper(function isIncludes(
  [arr, id]: [arr: number[], id: number] /*, named*/,
): boolean {
  return arr.includes(id);
});
