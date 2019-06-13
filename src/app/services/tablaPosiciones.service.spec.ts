import { TestBed } from '@angular/core/testing';

import { TablaPosicionesService } from './tablaPosiciones.service';

describe('TablaPosicionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablaPosicionesService = TestBed.get(TablaPosicionesService);
    expect(service).toBeTruthy();
  });
});
