import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slideHead: any[];
  public imgLink: string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("start home");

    this.imgLink = this.apiService.img;
    this.getThreeProduct();
  }

  public getThreeProduct() {
    let param = {};
    this.apiService
      .post("/api/getTheerProduct", param)
      .subscribe(
      data => this.getThreeProductDoneAction(data), // OR this.categoryLists = data.data,
      error => this.getThreeProducterrorAction(error)
      );
  }

  public getThreeProductDoneAction(data) {
    console.log("data = ", data);
    this.slideHead = data.data;
    if (this.slideHead.length > 0) {
      for (let z = 0; z < this.slideHead.length; z++) {
        this.slideHead[z].slider_path = this.imgLink + this.slideHead[z].pic_path;
        if(z == 0){
          this.slideHead[z].listbox = true;
        }else{
          this.slideHead[z].listbox = false;
        }
      }
    }
    $('.carousel').carousel({
      number: this.slideHead.length
    });
    console.log(this.slideHead.length);
  }

  public getThreeProducterrorAction(error) {
    console.log("error = ", error);
  }

  public testcheck(e){
    console.log(e.target.value);
    console.log(e.target.checked);
  }

}
