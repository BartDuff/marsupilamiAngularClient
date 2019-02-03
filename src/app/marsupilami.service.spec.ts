import { TestBed } from '@angular/core/testing';

import { MarsupilamiService } from './marsupilami.service';

describe('MarsupilamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarsupilamiService = TestBed.get(MarsupilamiService);
    expect(service).toBeTruthy();
  });
});
