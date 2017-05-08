import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';

// Add the RxJS Observable operators.
import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ////////////////// Service module /////////////////
    SharedModule,
    
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
