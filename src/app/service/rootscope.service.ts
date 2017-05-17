import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RootscopeService {
  // Observable navItem source
  // public data:any;
  public _showNav = new BehaviorSubject<any>({});
  public _cart = new BehaviorSubject<any>({});
  
  constructor() { }

  // Observable navItem stream
  showNav$ = this._showNav.asObservable();
  cartData$ = this._cart.asObservable();
  // service command
  loginShow(someObj:any) {
    this._showNav.next(someObj);
  }

  cartSet(cartObj:any) {
    this._cart.next(cartObj);
  }

}
