//import { ConjugationFactory } from 'conjugation-factory';
import { ConjugationFactory } from './conjugation-factory';
import { HebrewWord } from './hebrew-word';
import { SingularMasculineNounConjugator } from './singular-masculine-noun-conjugator';
import { WordConjugator } from './word-conjugator';

export class SingularMasculineNounConjugationFactory extends ConjugationFactory {
  public Create(): WordConjugator {
    return new SingularMasculineNounConjugator();
  }
}
