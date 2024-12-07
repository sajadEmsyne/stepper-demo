import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // tslint:disable-next-line: no-string-literal
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path!);

      // log the route path to the console

      return load();
    } else {
      return of(null);
    }
  }
}
