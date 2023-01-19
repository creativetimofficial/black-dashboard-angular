import { TestBed } from '@angular/core/testing';

import { PeriodService } from './period.service';

describe('PeriodService', () => {
  let service: PeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
