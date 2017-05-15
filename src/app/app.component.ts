import { Component, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    public _elRef: ElementRef
  ) {

  }

  ngOnInit() {
    console.log("start");
  }
}
