import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Router, RouterModule } from "@angular/router";
import { StepperComponent } from "../poc/stepper/stepper.component";
@Component({
  selector: "app-starter",
  templateUrl: "./starter.component.html",
  styleUrls: ["./starter.component.scss"],
  standalone: true,
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    StepperComponent,
    CommonModule,
  ],
})
export class StarterComponent {
  constructor(private router: Router) {
    // this.router.navigate(["/stepper/address"]);
  }
}
