import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VeryLongProcessService } from "src/app/services/very-long-process.service";
import { ReactiveFormsModule } from "@angular/forms";
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: "app-user-form",
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private verylongService: VeryLongProcessService,
    private activatedRoute: ActivatedRoute,
    private compRef :StepperComponent
  ) {
    this.userForm = this.verylongService.userForm;
    this.compRef.updateStepIndex("user");
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log("Form Submitted:", this.userForm.value);
      // Proceed to the next step
    }
  }
  // next() {
  //   // this.router.navigate(["/address"]);

  //   // this.verylongService.stepIncrement.next("address");
  //   // this.compRef.updateStepIndex('address')
  //   this.router.navigate(["/app/stepper/address"]);
  // }
}
