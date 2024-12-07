import { TestBed } from '@angular/core/testing';

import { MenuMapperService } from './menu-mapper.service';

describe('MenuMapperService', () => {
  let service: MenuMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
