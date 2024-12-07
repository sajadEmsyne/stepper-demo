import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <ngx-spinner
      bdColor="rgba(0, 0, 0, 0.8)"
      size="medium"
      color="#fff"
      type="square-jelly-box"
      [fullScreen]="true"
      template='<div class="loader-outer-ngx-spinner"> <div class="inner-ngx-spinner"> <div class="loader-ngx-spinner"></div> <img src="assets/images/muthoot.webp" alt="Muthoot"> </div> </div>'
    >
    </ngx-spinner>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) {
    
  }
}
