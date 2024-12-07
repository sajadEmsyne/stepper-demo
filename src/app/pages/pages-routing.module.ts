import { inject, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { StarterComponent } from "./starter/starter.component";
import { VeryLongProcessService } from "../services/very-long-process.service";
import { UserFormComponent } from "./poc/user-form/user-form.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "stepper",
    pathMatch: "full",
  },
  {
    path: "stepper",
    component: StarterComponent,
    children: [
      {
        path: "",
        redirectTo: "user",
        pathMatch: "full",
      },
      { path: "user", component: UserFormComponent },
      {
        path: "address",
        loadComponent: () =>
          import("./poc/address-form/address-form.component").then(
            (x) => x.AddressFormComponent
          ),
      },
      {
        path: "account",
        loadComponent: () =>
          import("./poc/account-form/account-form.component").then(
            (x) => x.AccountFormComponent
          ),
      },
      {
        path: "summary",
        loadComponent: () =>
          import("./poc/summary/summary.component").then(
            (x) => x.SummaryComponent
          ),
      },
    ],
  },

  // { path: "", redirectTo: "/starter", pathMatch: "full" },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
