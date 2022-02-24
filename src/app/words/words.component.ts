import { Component, OnInit } from '@angular/core';
import { HebrewWord } from '../hebrew-word';

import { WORDS } from '../mock-hebrew-words';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  words = WORDS;
  selectedWord?: HebrewWord;
  onSelect(word: HebrewWord): void {
    this.selectedWord = word;
  }

  constructor() {}

  ngOnInit() {}
}
