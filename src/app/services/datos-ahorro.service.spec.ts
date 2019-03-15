import { TestBed } from '@angular/core/testing';

import { DatosAhorroService } from './datos-ahorro.service';

describe('DatosAhorroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosAhorroService = TestBed.get(DatosAhorroService);
    expect(service).toBeTruthy();
  });
});
