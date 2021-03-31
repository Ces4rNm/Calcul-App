import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    let storagewv = localStorage.getItem("history");
    if (storagewv) {
      this.appService.history = JSON.parse(storagewv);
    }
  }
}
