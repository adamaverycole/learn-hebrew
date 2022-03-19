import { HebrewWord } from './hebrew-word';
import { WordConjugator } from './word-conjugator';

export abstract class ConjugationFactory {
  public abstract Create(): WordConjugator;
}
