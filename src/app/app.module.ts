import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { PerformanceComponent } from './performance/performance.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    PerformanceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
