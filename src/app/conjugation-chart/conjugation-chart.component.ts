import { Component, OnInit } from '@angular/core';
import { HebrewWord } from '../hebrew-word';

@Component({
  selector: 'app-conjugation-chart',
  templateUrl: './conjugation-chart.component.html',
  styleUrls: ['./conjugation-chart.component.css'],
})
export class ConjugationChartComponent implements OnInit {
  word: HebrewWord = {
    english: 'man',
    hebrew: 'אִישׁ',
    pronunciation: 'eesh',
    transliteration: '\'îš',
    strongsNumber: 'H376',
  };

  constructor() {}

  ngOnInit() {}
}
