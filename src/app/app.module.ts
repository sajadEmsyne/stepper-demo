import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from "./layouts/layouts.module";
import { PagesModule } from "./pages/pages.module";

// Auth
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Language
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppConfigService } from './core/services/functional/app-config.service';
import { BaseHttpService } from './core/services/api/base-http.service'; 
import { ToastrModule } from 'ngx-toastr';
import { LoadChunkErrorHandlerService } from './core/services/core/load-chunk-error-handler.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const initAppFn = (envService: AppConfigService) => {
  return () => envService.loadEnvConfig();
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar:true
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark', loadingText: 'Loading...' }),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    PagesModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initAppFn, multi: true, deps: [AppConfigService] },
    { provide: ErrorHandler, useClass: LoadChunkErrorHandlerService },
    AppConfigService,
    BaseHttpService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
