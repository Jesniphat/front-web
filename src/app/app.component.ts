import { Component, ElementRef } from '@angular/core';
import { ApiService } from "./service/api.service";
import { RootscopeService } from "./service/rootscope.service";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public productList = 'Product';
  public cartBadge = 0;

  constructor(
    public apiService: ApiService,
    public $rootScope: RootscopeService,
    public _elRef: ElementRef
  ) {

  }

  ngOnInit() {
    console.log("start");
    this.$rootScope.cartData$.subscribe(data => this.setBadge(data));
  }

  public ProductMenuListClick(menu:string){
    this.productList = menu;
  }

  public setBadge(data:any){
    if(Object.keys(data).length == 0){
      this.cartBadge = 0;
    }else{
      this.cartBadge = data.qty;
    }
  }
}
