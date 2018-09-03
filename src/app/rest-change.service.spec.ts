import { TestBed, inject } from '@angular/core/testing';

import { RestChangeService } from './rest-change.service';

describe('RestChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestChangeService]
    });
  });

  it('should be created', inject([RestChangeService], (service: RestChangeService) => {
    expect(service).toBeTruthy();
  }));
});
