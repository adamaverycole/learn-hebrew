import { Language } from './language.enum';

export class ConjugatedWordForm {
  form: string;
  language: Language;
  firstSingularCommon: string;
  firstPluralCommon: string;
  secondSingularMasculine: string;
  secondSingularFeminine: string;
  secondPluralMasculine: string;
  secondPluralFeminine: string;
  thirdSingularMasculine: string;
  thirdSingularFeminine: string;
  thirdPluralMasculine: string;
  thirdPluralFeminine: string;
}
