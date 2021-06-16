import { TestBed } from '@angular/core/testing';

import { EStoreState } from './e-store-state.service';

describe('TcsStateService', () => {
  let service: EStoreState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EStoreState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
