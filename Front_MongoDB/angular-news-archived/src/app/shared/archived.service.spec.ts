import { TestBed } from '@angular/core/testing';

import { ArchivedService } from './archived.service';

describe('ArchivedService', () => {
  let service: ArchivedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
