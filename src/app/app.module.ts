import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConjugationChartComponent } from './conjugation-chart/conjugation-chart.component';
import { WordsComponent } from './words/words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { EnumToStringPipe } from './enum-to-string.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ConjugationChartComponent,
    WordsComponent,
    WordDetailComponent,
    EnumToStringPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
