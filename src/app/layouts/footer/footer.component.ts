import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  appVersion: string;
  currentYear: number;
  appName: string;

  constructor() {
    this.currentYear = 2024;
    this.appName = 'CFSS POC';
    this.appVersion = '1.0.0';
  }


}
