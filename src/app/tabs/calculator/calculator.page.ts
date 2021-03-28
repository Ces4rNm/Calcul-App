import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  history = [];
  resultText: String = '';
  @ViewChild('form') form: ElementRef;
  @ViewChild('resInput') resInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  resultado(res) {
    this.history.push(res);
    console.log(this.history);
  }

}
