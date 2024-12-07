import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeryLongProcessService } from 'src/app/services/very-long-process.service';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  accountFormData:any;
  addressFormData: any;
  // back() {
  //   this.router.navigate(['/app/account'])
  // }
  userForm: any;
  addressForm: any;
  accountForm: any;
  formData: any = {}

  constructor(private _VeryLongProcessService: VeryLongProcessService ,private router :Router,private compRef:StepperComponent) {
    this.userForm = this._VeryLongProcessService?.userForm;
    this.addressForm = this._VeryLongProcessService?.addressForm;
    this.accountForm = this._VeryLongProcessService?.accountForm;
    this.formData = this.userForm.value;
    this.addressFormData =this.addressForm.value
    this.accountFormData=this.accountForm.value
    this.compRef.updateStepIndex("summary");
  }

}