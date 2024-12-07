import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VeryLongProcessService } from "src/app/services/very-long-process.service";
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: "app-account-form",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./account-form.component.html",
  styleUrls: ["./account-form.component.css"],
})
export class AccountFormComponent {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private veryLongService: VeryLongProcessService,
    private compRef: StepperComponent
  ) {
    this.accountForm = this.veryLongService.accountForm;
    this.compRef.updateStepIndex("account");
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log("Account Form Submitted:", this.accountForm.value);
      // this.next();
    }
  }

  // previous(): void {
  //   // this.router.navigate(['/app/account']); // Adjust route as necessary
  //   this.veryLongService.stepDecrement.next("address");
  //   // this.compRef.updateStepIndex("address");
  //   this.router.navigate(["/app/stepper/address"]);
  // }

  // next(): void {
  //   // this.router.navigate(['/app/summary']); // Adjust route as necessary
  //   this.veryLongService.stepIncrement.next("summary");
  //   // this.compRef.updateStepIndex("summary");
  //   this.router.navigate(["/app/stepper/summary"]);
  // }
}
