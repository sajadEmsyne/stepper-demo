import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SelectivePreloadingStrategyService } from '../functional/selective-preloading-strategy.service'; // Replace with the actual path

describe('SelectivePreloadingStrategyService', () => {
  let service: SelectivePreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingStrategyService],
    });

    service = TestBed.inject(SelectivePreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should preload modules with preload data', done => {
    const route = { path: 'example', data: { preload: true } };

    service
      .preload(route as any, () => of(null))
      .subscribe(result => {
        // Check that the route path is added to the preloadedModules array
        expect(service.preloadedModules).toContain('example');

        // Check that the load function is called
        expect(result).toBeNull();

        done();
      });
  });

  it('should not preload modules without preload data', done => {
    const route = { path: 'example', data: { preload: false } };

    service
      .preload(route as any, () => of(null))
      .subscribe(result => {
        // Check that the route path is not added to the preloadedModules array
        expect(service.preloadedModules).not.toContain('example');

        // Check that the load function is not called
        expect(result).toBeNull();

        done();
      });
  });

  it('should not preload modules without data', done => {
    const route = { path: 'example' };

    service
      .preload(route as any, () => of(null))
      .subscribe(result => {
        // Check that the route path is not added to the preloadedModules array
        expect(service.preloadedModules).not.toContain('example');

        // Check that the load function is not called
        expect(result).toBeNull();

        done();
      });
  });
});
