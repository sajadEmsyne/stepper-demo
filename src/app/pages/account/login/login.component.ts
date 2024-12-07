import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/functional/login.service';
import { UiAlertsService } from '../../../core/services/functional/ui-alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  @Input() controlName: string | undefined;
  loginForm!: UntypedFormGroup;
  submitted = false;
  error = "";
  returnUrl!: string;
  showPassword = false;
  slides: any = [];
  email = 'Username';
  password = 'Password';
  currentYear: number;
  appName: string;
  appVersion: string;
  marqueContent: { marqueContent: string; };

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private _loginService: LoginService,
    private uiAlerts: UiAlertsService,
    private el: ElementRef,
  ) {
    this.currentYear = 2024;
    this.appName = 'CFSS POC';
    this.appVersion = '1.0.0';
    this.marqueContent = {
      "marqueContent" :"Dear Valued Customer, Due to scheduled maintenance, Muthoot Online service may be interrupted between 7.00 AM to 2.00PM on Sunday, 12th February 2024, Inconvenience deeply regretted."
   }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  responseHandler(responseDataSuccess: any) {
    if (responseDataSuccess.statusCode == 200) {
      const responseData = responseDataSuccess;
      const displayName = responseData.data.userUnitResponseToUI.displayName;
      const orgUnitCode = responseData.data.userUnitResponseToUI.orgUnitCode
      let menuAry = responseData.data?.menu;
      //temp fix to handle null value getting as "null" string
      // const menuAryTemp = menuAry?.map((p: { parentId: string; }) =>
      //   p.parentId === 'null'
      //     ? { ...p, parentId: null }
      //     : p
      // );
      // menuAry = menuAryTemp;
      // this._commonService.setSideBarMenu(menuAry)

      // this.storageService.setSessionStorageItem('currentUser', JSON.stringify(responseData.data.userUnitResponseToUI));
      // this.storageService.setSessionStorageItem('menus', JSON.stringify(menuAry));

      let storageArray = [
        { key: 'displayName', value: displayName },
        { key: 'menus', value: JSON.stringify(menuAry) },
        { key: 'orgUnitCode', value: orgUnitCode },
        //      { key: 'orgUnitID', value: orgUnitID.toString() },
        { key: 'toast', value: "true" },
        // { key: 'token', value: responseDataSuccess.correlationId }, 
        // { key: 'access_token', value: responseDataSuccess.correlationId }
      ]
      // this.storageService.setStorageItem('menus', JSON.stringify(menuAry));
      //this.storageService.setMultipleStorageItems(storageArray);
      if (menuAry.length > 0) {
        this.router.navigate(['/app/starter']);
      }
      else {
        this.uiAlerts.showAlertMessage("You have no permission to view pages.", 'error');
      }

    }

  }
  alertShowing = false;

  focusUserName() {
    const emailControl = this.el.nativeElement.querySelector("#email");
    if (emailControl) {
      emailControl.focus();
    }
  }

  focusPassword() {
    const emailControl = this.el.nativeElement.querySelector("#password");
    if (emailControl) {
      emailControl.focus();
    }
  }

  onSubmit(){
    const loginStat = this._loginService.getMenusStatic();
    this.responseHandler(loginStat);
   }

}


