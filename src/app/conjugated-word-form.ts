import { Language } from './language.enum';

export interface ConjugatedWordForm {
  form: string;
  language: Language;
  singularFirstPerson: string;
  pluralFirstPerson: string;
  singularSecondPersonMasculine: string;
  singularSecondPersonFeminine: string;
  pluralSecondPersonMasculine: string;
  pluralSecondPersonFeminine: string;
  singularThirdPersonMasculine: string;
  singularThirdPersonFeminine: string;
  pluralThirdPersonMasculine: string;
  pluralThirdPersonFeminine: string;
}
