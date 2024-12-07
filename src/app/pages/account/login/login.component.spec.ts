import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LoaderService } from 'src/app/core/interceptors/Loader/loader.service';
import { AuthenticationService } from 'src/app/core/services/api/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthenticationService>;
  let loaderServiceSpy: jasmine.SpyObj<LoaderService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let router: Router;
  beforeEach(async(() => {
    const authSpy = jasmine.createSpyObj('AuthenticationService', ['login']);
    const loaderSpy = jasmine.createSpyObj('LoaderService', ['showSpinnerx', 'hideSpinnerx']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: AuthenticationService, useValue: authSpy },
        { provide: LoaderService, useValue: loaderSpy },
        {provide: Router, useValue: routerSpyObj }
      ],
    })
      .compileComponents();

    authServiceSpy = TestBed.inject(AuthenticationService) as jasmine.SpyObj<AuthenticationService>;
    loaderServiceSpy = TestBed.inject(LoaderService) as jasmine.SpyObj<LoaderService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>; 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Method ngOnInit() working ", () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it("Method form  working", () => {
    component.loginForm.controls["email"].setValue("test");
    component.loginForm.controls["password"].setValue("test");
    expect(component.loginForm.valid).toBeTruthy();
  });

  it("Method get Formcontrol() is not working ", () => {
    component.form;
    expect(component).toBeTruthy();
  });
  // it("Method onSubmit() is working when form is valid", () => {
  //   component.loginForm.controls["email"].setValue("branchuser");
  //   component.loginForm.controls["password"].setValue("12345");
  //   expect(component.loginForm.valid).toBeTruthy();

  //   const newData = {
  //     "statusCode": 200,
  //     "message": "Success",
  //     "correlationId": "f18a200e-7457-4050-88ee-e7df62199c9e",
  //     "data": {
  //       "menu": [
  //         {
  //           "menuId": "3f1c30a8-71fe-4f5f-a3b5-e76ae558c73c",
  //           "menuName": "Loan Advancing",
  //           "routePath": "loanadvancing",
  //           "displayOrder": "2",
  //           "moduleId": "10",
  //           "icon": "loan-advance",
  //           "parentId": "30351fbc-dfbb-457b-abb6-66777066e688"
  //         },
  //         {
  //           "menuId": "e96f1e1e-d82c-4e4f-b642-7e61dcfdf3ea",
  //           "menuName": "Dashboard",
  //           "routePath": "dashboard",
  //           "displayOrder": "0",
  //           "moduleId": "13",
  //           "icon": "a",
  //           "parentId": "null"
  //         },
  //         {
  //           "menuId": "171d22fe-e79e-4599-bc6e-a7c8bffcdfbd",
  //           "menuName": "Loan Listing",
  //           "routePath": "loans",
  //           "displayOrder": "1",
  //           "moduleId": "10",
  //           "icon": "loan-list",
  //           "parentId": "30351fbc-dfbb-457b-abb6-66777066e688"
  //         },
  //         {
  //           "menuId": "30351fbc-dfbb-457b-abb6-66777066e688",
  //           "menuName": "Loan Management",
  //           "routePath": "#",
  //           "displayOrder": "2",
  //           "moduleId": "13",
  //           "icon": "a",
  //           "parentId": "null"
  //         },
  //         {
  //           "menuId": "42dc8ba5-aedd-47f1-be24-02bd49301b8f",
  //           "menuName": "Customer",
  //           "routePath": "customers",
  //           "displayOrder": "1",
  //           "moduleId": "3",
  //           "icon": "customers",
  //           "parentId": "null"
  //         }
  //       ],
  //       "userUnitResponseToUI": {
  //         "orgUnitName": "ERNAKULAM - EDAPPALLY",
  //         "orgUnitCode": "0038",
  //         "sysDate": "2023-06-22T08:55:36.317102Z",
  //         "eodStatus": 1,
  //         "isAadharAllowed": 0,
  //         "isHoBranch": 0,
  //         "displayName": "Temp",
  //         "eodDate": "2023-05-22T00:00:00",
  //         "userId": "1e3390c8-99d0-4dde-9e4d-d9592172cb3c",
  //         "status": 1,
  //         "orgUnitID": 82
  //       }
  //     }
  //   };
  //   spyOn(authServiceSpy, "login").and.returnValue(Promise.resolve(newData));
  //   component.onSubmit();
  //   expect(newData.statusCode === 200).toBeTruthy();
  //   expect(router.navigate).toHaveBeenCalledWith(["/dashboard"]);
  // });
  // it("Method onSubmit() is not working if validation fails ", () => {
  //   component.loginForm.controls["email"].setValue("");
  //   component.loginForm.controls["password"].setValue("");
  //   expect(component.loginForm.valid).toBeFalsy();
  
  //   const newData = {
  //     statusCode: 500,
  //     data: {
  //       accessToken: "asdas",
  //       userName: "asd",
  //       userRoles: ["role"],
  //     },
  //   };
  
  //   // Use and.returnValue for the first call
  //   spyOn(authServiceSpy, "login").and.returnValue(Promise.reject(newData));
  
  //   // Use and.returnValue for subsequent calls
  //   spyOn(authServiceSpy, "login").and.returnValue(Promise.reject(newData));
  
  //   component.onSubmit();
  //   expect(newData.statusCode === 500).toBeTruthy();
  // });
  
  // it("Method onSubmit() is not working when form is valid", () => {
  //   component.loginForm.controls["email"].setValue("branchusersdf");
  //   component.loginForm.controls["password"].setValue("12345");
  //   expect(component.loginForm.valid).toBeTruthy();
  //   const newData = {
  //     statusCode: 500,
  //     data: null,
  //   };

  //   spyOn(authServiceSpy, "login").and.returnValues(of(newData));
  //   component.onSubmit();
  //   expect(newData.statusCode === 500).toBeTruthy();
  // });

});