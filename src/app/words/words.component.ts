import { Component, OnInit } from '@angular/core';
import { ConjugatedWordForm } from '../conjugated-word-form';
import { HebrewWord } from '../hebrew-word';

import { WORDS } from '../mock-hebrew-words';
import { SingularMasculineNounConjugationFactory } from '../singular-masculine-noun-conjugation-factory';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  words = WORDS;
  selectedWord?: HebrewWord;
  singularMasculineNoun?: ConjugatedWordForm;
  onSelect(word: HebrewWord): void {
    var conjugator = new SingularMasculineNounConjugationFactory().Create();
    this.selectedWord = word;
    this.singularMasculineNoun = conjugator.Conjugate(word);
  }

  constructor() {}

  ngOnInit() {}
}
