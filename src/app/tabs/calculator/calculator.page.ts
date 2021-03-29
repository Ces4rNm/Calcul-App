import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  resultText: String = '';
  @ViewChild('form') form: ElementRef;
  @ViewChild('resInput') resInput: ElementRef;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  resultado(res) {
    this.appService.history.push(this.resInput.nativeElement.value);
    this.resInput.nativeElement.value = eval(this.resInput.nativeElement.value);
    this.appService.history.push(this.resInput.nativeElement.value);
  }

}
