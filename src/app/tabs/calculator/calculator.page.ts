import { Component, OnInit, ViewChild, ElementRef, SimpleChange } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  @ViewChild('form') form: ElementRef;
  @ViewChild('resInput') resInput: ElementRef;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  agregar(tecla) {
    if (this.appService.value != 'Math Error') {
      this.appService.value += tecla;
    } else {
      this.appService.value = tecla;
    }
  }

  resultado() {
    if (this.appService.value != 'Math Error') {
      // e = expresión, r = respuesta
      this.appService.history.push({ type: 'e', val: this.resInput.nativeElement.value });
      try {
        this.appService.value = eval(this.resInput.nativeElement.value);
      } catch (error) {
        this.appService.value = 'Math Error';
      }
      this.appService.history.push({ type: 'r', val: this.appService.value });
      localStorage.setItem("history", JSON.stringify(this.appService.history));
    } else {
      this.appService.value = '';
    }
  }

  borrar() {
    this.appService.value = '';
  }
}
