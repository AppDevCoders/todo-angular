import { Component, OnInit, Input } from '@angular/core';


/* tslint:enabled */
@Component({
  selector: 'performance-component',  // tslint:disable-line
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  @Input() start: number;
  @Input() amount: number;

  numbers: Array<number>;
  elapsedtime: number;

  constructor() {
    this.elapsedtime = 0;
    this.numbers = [];
  }

  ngOnInit() {
    // --
  }


  startTest() {
    this.clearTest();

    let num = this.start;
    const limit = this.amount;

    const starttime = new Date().getTime();
    for (let i = 1; i <= limit; i++) {

        num = this.nextPrimeNumber(num);
        this.numbers.unshift(num);

        num = num + 1;
    }
    this.elapsedtime = new Date().getTime() - starttime;
  }


  nextPrimeNumber(num) {
    let result = false;
    while (!result) {
        result = this.isPrime(num);
        if (!result) {
            num = num + 1;
        }
    }
    return num;
  }


  isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num !== 1;
  }


  clearTest() {
      this.numbers.splice(0, this.numbers.length);
      this.elapsedtime = 0;
  }

}
