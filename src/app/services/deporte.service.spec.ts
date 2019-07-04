import { TestBed } from '@angular/core/testing';

import { DeporteService } from './deporte.service';

describe('DeporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeporteService = TestBed.get(DeporteService);
    expect(service).toBeTruthy();
  });
});
