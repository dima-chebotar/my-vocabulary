import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type { Responce } from 'client/types/user.type';

export interface UserSignature {
  Args: {
    model: Responce;
  };
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class UserComponent extends Component<UserSignature> {
  @tracked activeLevelIndex = 0;
  @tracked activeTopicIndex = 0;

  get activeTopics() {
    return this.args.model.levels[this.activeLevelIndex]?.topics;
  }

  get activeWords() {
    return this.activeTopics![this.activeTopicIndex]?.words;
  }

  get complitedTopics(): number[] {
    return this.args.model.user.progres.complitedTopics;
  }

  get levels(): number[] {
    const levels = this.args.model.user.progres.complitedLevels;
    if (levels.length === 0) {
      levels.push(1);
      return levels;
    }
    levels.push(levels[levels.length - 1]! + 1);

    return levels;
  }

  get topics(): number[] {
    const topics = this.args.model.user.progres.complitedTopics;
    if (topics.length === 0) {
      topics.push(1);
      return topics;
    }
    topics.push(topics[topics.length - 1]! + 1);

    return topics;
  }

  isActive(index: number, activeIndex: number): boolean {
    return index === activeIndex;
  }

  @action
  changeLevel(index: number) {
    this.activeLevelIndex = index;
  }

  @action
  changeTopic(index: number) {
    this.activeTopicIndex = index;
  }
}
