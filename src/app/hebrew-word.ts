import { Gender } from './gender.enum';
import { SpeechType } from './speech-type.enum';

export class HebrewWord {
  english: string;
  hebrew: string;
  pronunciation: string;
  transliteration: string;
  strongsNumber: string;
  gender: Gender;
  // get genderValue(): string {
  //   return this.gender.toString();
  // }
  speech?: SpeechType;
  notes?: string;

  // genderValue(): string {
  //   return this.gender.toString();
  // }
}
