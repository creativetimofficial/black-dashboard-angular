import { TestBed } from '@angular/core/testing';

import { ScenarioListService } from './scenario-list.service';

describe('ScenarioListService', () => {
  let service: ScenarioListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
