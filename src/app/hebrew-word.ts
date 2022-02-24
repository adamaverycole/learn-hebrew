import { Gender } from './gender.enum';
import { SpeechType } from './speech-type.enum';

export interface HebrewWord {
  english: string;
  hebrew: string;
  pronunciation: string;
  transliteration: string;
  strongsNumber: string;
  gender: Gender;
  speech?: SpeechType;
  notes?: string;
}
