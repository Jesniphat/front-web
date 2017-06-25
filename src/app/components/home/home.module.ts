import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    routing,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
    bootstrap: [
      HomeComponent
  ]
})
export class HomeModule { }
