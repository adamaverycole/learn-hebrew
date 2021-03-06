import { Component, OnInit, Input } from '@angular/core';
import { ConjugatedWordForm } from '../conjugated-word-form';
import { HebrewWord } from '../hebrew-word';
import { SpeechType } from '../speech-type.enum';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css'],
})
export class WordDetailComponent implements OnInit {
  @Input() word?: HebrewWord;
  @Input() conjugatedWord?: ConjugatedWordForm;

  constructor() {}

  ngOnInit() {}
}
