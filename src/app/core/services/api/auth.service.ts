/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http.service";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";
import { constants } from "./constants.service";
import { AppConfigService } from "../functional/app-config.service";
import { User } from "../../models/auth.models";
import { HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  user!: User;
  currentUserValue: any;
  protected envConfig: any;
  basePath!: string;

  constructor(
    private apiservice: BaseHttpService,
    private envService: AppConfigService,
    private router: Router,
  ) {
  }

  private envPath = `${environment.login}`;


  login(data: any) {
    let headers = new HttpHeaders({
      ShowLoader: 'true'
    });
    const config: any = this.envService.getEnvConfig() || "";
    this.envConfig = config["serverUrl"];
    this.basePath = `${this.envConfig}${this.envPath}`;
    const url = constants.apiEndPoints.login;
    return this.apiservice.postRequest(data, `${this.basePath}/${url}`,headers);
  }

  //Logout api call | Merlin
  logout() {
    let headers = new HttpHeaders({
      ShowLoader: 'true'
    });
    const config: any = this.envService.getEnvConfig() || "";
    this.envConfig = config["serverUrl"];
    this.basePath = `${this.envConfig}${this.envPath}`;
    const url = constants.apiEndPoints.logout;
    return this.apiservice.post({}, `${this.basePath}/${url}`,headers);
  }

}

