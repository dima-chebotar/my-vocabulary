export interface Responce {
  user: User;
  levels: Level[];
}

export interface User {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  progres: Progres;
}

export interface Progres {
  id: number;
  complitedLevels: number[];
  complitedTopics: number[];
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface Level {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  topics: Topic[];
}

export interface Topic {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  levelId: number;
  words: Word[];
}

export interface Word {
  id: number;
  word: string;
  image: string;
  audio: string;
  createdAt: string;
  updatedAt: string;
  topicId: number;
  translationWords: TranslationWord[];
}

export interface TranslationWord {
  id: number;
  ua: string;
  es: string;
  createdAt: string;
  updatedAt: string;
  wordId: number;
}
