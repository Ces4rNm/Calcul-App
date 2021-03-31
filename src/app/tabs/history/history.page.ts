import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  @ViewChild('content') private content: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  abrir(value) {
    this.appService.value = value.val;
  }

  borrarTodo() {
    this.appService.history = [];
    localStorage.clear();
  }

  ionViewDidEnter() {
    this.content.scrollToBottom(300);
  }
}
