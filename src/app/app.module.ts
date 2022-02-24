import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConjugationChartComponent } from './conjugation-chart/conjugation-chart.component';
import { WordsComponent } from './words/words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ConjugationChartComponent,
    WordsComponent,
    WordDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
