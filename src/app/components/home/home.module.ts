import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
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
