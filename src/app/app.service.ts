import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  history: Array<string> = [];
  constructor() { }
}
