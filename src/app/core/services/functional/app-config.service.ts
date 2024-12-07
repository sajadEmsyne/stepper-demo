/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable()

export class AppConfigService {

  private envConfig: Object | undefined;

  constructor(private http: HttpClient) { }

  async loadEnvConfig() {
    return await firstValueFrom(this.http.get('config/config.json')).then(
      (data) => {
        this.envConfig = data;
      }
    );
  }

  getEnvConfig() {
    return this.envConfig;
  }
}
