import { TestBed } from '@angular/core/testing';

import { DatosDiagnosticoService } from './datos-diagnostico.service';

describe('DatosDiagnosticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosDiagnosticoService = TestBed.get(DatosDiagnosticoService);
    expect(service).toBeTruthy();
  });
});
