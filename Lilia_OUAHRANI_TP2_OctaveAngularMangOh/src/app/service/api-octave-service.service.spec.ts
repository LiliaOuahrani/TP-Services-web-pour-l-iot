import { TestBed } from '@angular/core/testing';

import { ApiOctaveServiceService } from './api-octave-service.service';

describe('ApiOctaveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiOctaveServiceService = TestBed.get(ApiOctaveServiceService);
    expect(service).toBeTruthy();
  });
});
