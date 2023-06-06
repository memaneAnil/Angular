import { TestBed } from '@angular/core/testing';

import { EinfoService } from './einfo.service';

describe('EinfoService', () => {
  let service: EinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
