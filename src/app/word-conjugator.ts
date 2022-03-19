import { ConjugatedWordForm } from './conjugated-word-form';

export interface WordConjugator {
  conjugate(): ConjugatedWordForm;
}
