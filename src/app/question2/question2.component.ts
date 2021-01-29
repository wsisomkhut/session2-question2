import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css'],
})
export class Question2Component implements OnInit {
  constructor() {}
  values: any = [];
  mainValues: any = [];

  ngOnInit(): void {
    this.getData();
  }
  search(e:any){
    let v = e.target.value;
    this.values = this.mainValues.filter((item:any)=>{
      return item.indexOf(v) !=-1;
    })
  }

  getData() {
    fetch('https://api.publicapis.org/categories')
      .then((res) => res.json())
      .then((response: any) => {
        this.mainValues = response;
        this.values = response;
      });
  }
}
