// very-long-process.service.ts
import { Injectable, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VeryLongProcessService {
  private validNavigation = false;
  stepIncrement = new BehaviorSubject('');
  stepDecrement = new Subject();
  accountForm = new FormGroup({
    email: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  addressForm = new FormGroup({
    street: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
    state: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  userForm = new FormGroup({
    firstName: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  processUserData: any;

  // Method to get all form data combined
  getAllFormData() {
    return {
      ...this.userForm.value,
      ...this.addressForm.value,
      ...this.accountForm.value,
    };
  }

  // Method to reset the forms (optional)
  resetForms() {
    this.userForm.reset();
    this.addressForm.reset();
    this.accountForm.reset();
  }

  setNavigationValid(): void {
    this.validNavigation = true;
  }

  // Check if the navigation is valid
  isUserNavigationValid(): boolean {
    return this.validNavigation;
  }

  // Reset navigation state
  resetNavigation(): void {
    this.validNavigation = false;
  }
}
