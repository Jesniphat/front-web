import { Component, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public productList = 'Product';

  constructor(
    public _elRef: ElementRef
  ) {

  }

  ngOnInit() {
    console.log("start");
  }

  public ProductMenuListClick(menu:string){
    this.productList = menu;
  }
}
