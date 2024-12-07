import { TestBed } from '@angular/core/testing';

import { LoadChunkErrorHandlerService } from './load-chunk-error-handler.service';

describe('LoadChunkErrorHandlerService', () => {
  let service: LoadChunkErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadChunkErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
