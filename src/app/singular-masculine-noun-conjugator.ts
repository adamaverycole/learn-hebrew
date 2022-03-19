import { WordConjugator } from './word-conjugator';
import { ConjugatedWordForm } from './conjugated-word-form';
import { HebrewWord } from './hebrew-word';

export class SingularMasculineNounConjugator implements WordConjugator {
  Conjugate(word: HebrewWord) {
    var conjugatedWord = new ConjugatedWordForm();
    conjugatedWord.firstSingularCommon = word.hebrew + 'י';
    conjugatedWord.firstPluralCommon = word.hebrew + 'נו';
    conjugatedWord.secondSingularMasculine = word.hebrew + 'ך';
    conjugatedWord.secondSingularFeminine = word.hebrew + 'ך';
    conjugatedWord.secondPluralMasculine = word.hebrew + 'כם';
    conjugatedWord.secondPluralFeminine = word.hebrew + 'כן';
    conjugatedWord.thirdSingularMasculine = word.hebrew + 'ו';
    conjugatedWord.thirdSingularFeminine = word.hebrew + 'ה';
    conjugatedWord.thirdPluralMasculine = word.hebrew + 'תם';
    conjugatedWord.thirdPluralFeminine = word.hebrew + 'תן';

    return conjugatedWord;
  }
}
