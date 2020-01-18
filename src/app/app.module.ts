import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordsColumnComponent } from './words-column/words-column.component';
import { MixerAppComponent } from './mixer-app/mixer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WordsColumnComponent,
    MixerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
