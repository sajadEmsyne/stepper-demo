import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './account/login/login.component';
import { UserLetterIconsPipe } from '../core/pipe/user-letter-icons.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {PageHeaderComponent } from 'em-page-header';
import { StarterComponent } from './starter/starter.component';
import { StepLabelDirective } from './poc/step-label.directive'
import { VeryLongProcessService } from '../services/very-long-process.service';
 
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CountUpModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    UserLetterIconsPipe,
    NgbNavModule,
    NgApexchartsModule,
    SlickCarouselModule,
    PageHeaderComponent
    ],
  providers:[VeryLongProcessService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PagesModule { }
