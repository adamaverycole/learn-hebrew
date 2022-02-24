import { Gender } from './gender.enum';

export interface HebrewWord {
  english: string;
  hebrew: string;
  pronunciation: string;
  transliteration: string;
  strongsNumber: string;
  gender: Gender;
}
