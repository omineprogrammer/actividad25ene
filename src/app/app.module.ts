import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DarkModeService } from './services/darkmode.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
