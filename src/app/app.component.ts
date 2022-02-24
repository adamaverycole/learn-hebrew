import { Component, VERSION } from '@angular/core';
import { ConjugationChartComponent } from './conjugation-chart/conjugation-chart.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
