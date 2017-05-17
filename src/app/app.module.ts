import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';

// Add the RxJS Observable operators.
import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // routing //
    routing,
    ////////////////// Service module /////////////////
    SharedModule,
    
    BrowserModule,
    FormsModule,
    HttpModule,

    // page module //
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
