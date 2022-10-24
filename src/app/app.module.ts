import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatriceComponentComponent } from './calculatrice-component/calculatrice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponentComponent
  ],
  imports: [
    // FormsModule import de @angular/forms
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
