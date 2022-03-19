import { ConjugatedWordForm } from './conjugated-word-form';
import { HebrewWord } from './hebrew-word';

export interface WordConjugator {
  Conjugate(word: HebrewWord): ConjugatedWordForm;
}
