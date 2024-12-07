import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { SelectivePreloadingStrategyService } from './core/services/functional/selective-preloading-strategy.service';
import { LoginComponent } from './pages/account/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pages', component: LayoutComponent,    
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'app',
    pathMatch: "prefix",
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.module').then(
        m => m.PagesModule
      ),
    data: { preload: false },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: SelectivePreloadingStrategyService,
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
