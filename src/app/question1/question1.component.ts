import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
})
export class Question1Component implements OnInit {
  constructor() {}
  typeCal = ['isPrime', 'isFibonacci'];
  response = '';
  number = '';
  cal = 'isPrime';
  selectCal = Element;

  changeNumber(e: any) {
    this.number = e.target.value;
    this.setResponse();
  }
  onOptionsSelected(e: any) {
    this.cal = e.target.value;

    this.setResponse();
  }
  setResponse() {
    console.log(this.number);
    console.log(this.cal);
    try {
      let isNum = Number.isInteger(parseInt(this.number, 10));
      if (isNum) {
        if (this.cal === 'isPrime') {
          if (this.isPrime(parseInt(this.number))) {
            this.response = 'true';
          }
        } else if (this.cal === 'isFibonacci') {
          if (parseInt(this.number, 10) == 0 || this.isFibonacci(parseInt(this.number))) {
            this.response = 'true';
          }
        } else {
          this.response = 'false';
        }
      } else {
        this.response = 'false';
      }
    } catch (e) {
      console.log(e);
      this.response = 'false';
    }

    // for(var a=0;a<1000;a++){console.log(a+" "+this.isFibonacci(a))}
  }
  isPrime(num: any) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  isFibonacci(query: any, count = 1, last = 0): boolean {
    if (count < query) {
      return this.isFibonacci(query, count + last, count);
    }
    if (count === query) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {}
}
