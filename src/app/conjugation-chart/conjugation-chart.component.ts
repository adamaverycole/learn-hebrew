import { Component, OnInit, Input } from '@angular/core';
import { ConjugatedWordForm } from '../conjugated-word-form';
import { Gender } from '../gender.enum';
import { HebrewWord } from '../hebrew-word';

@Component({
  selector: 'app-conjugation-chart',
  templateUrl: './conjugation-chart.component.html',
  styleUrls: ['./conjugation-chart.component.css'],
})
export class ConjugationChartComponent implements OnInit {
  // wordx: HebrewWord = {
  //   english: 'man',
  //   hebrew: 'אִישׁ',
  //   pronunciation: 'eesh',
  //   transliteration: "'îš",
  //   strongsNumber: 'H376',
  //   gender: Gender.masculine,
  // };

  @Input() word?: HebrewWord;
  @Input() conjugatedWord: ConjugatedWordForm;

  constructor() {}

  ngOnInit() {}
}
