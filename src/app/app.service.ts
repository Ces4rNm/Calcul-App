import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  history: Array<object> = [];
  value: string = '';
  constructor() { }
}
