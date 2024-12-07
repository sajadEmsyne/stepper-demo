import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { VeryLongProcessService } from "src/app/services/very-long-process.service";
import { StepperComponent } from "../stepper/stepper.component";
@Component({
  selector: "app-address-form",
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent {
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private verylongService: VeryLongProcessService,
    private compRef: StepperComponent
  ) {
    this.addressForm = this.verylongService.addressForm;
    // this.addressForm = this.fb.group({
    //   street: ['', Validators.required],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]], // Zip code validation
    // });
     this.compRef.updateStepIndex('address')
  }

  // ngOnInit(): void {
  //   // Check if the page is refreshed
  //   const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  //   if (navigation && navigation.type === 'reload') {
  //     // Redirect to the starting page
  //     this.router.navigate(['/app/user']);
  //   }
  // }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log("Address Form Submitted:", this.addressForm.value);
      // this.next();
    }
  }

  // previous(): void {
  //   // this.router.navigate(['/app/user']); // Adjust the route as necessary
  //   this.verylongService.stepDecrement.next("user");
  //   // this.compRef.updateStepIndex("user");
  //   this.router.navigate(["/app/stepper/user"]);
  // }

  // next(): void {
  //   // this.router.navigate(['/app/account']); // Adjust the route as necessary
  //   this.verylongService.stepIncrement.next("account");
  //   // this.compRef.updateStepIndex("account");
  //   this.router.navigate(["/app/stepper/account"]);
  // }
}
