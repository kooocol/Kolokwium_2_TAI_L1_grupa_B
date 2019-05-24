import { TestBed } from '@angular/core/testing';

import { NKDataService } from './nk-data.service';

describe('NKDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NKDataService = TestBed.get(NKDataService);
    expect(service).toBeTruthy();
  });
});
