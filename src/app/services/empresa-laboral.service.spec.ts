import { TestBed } from '@angular/core/testing';

import { EmpresaLaboralService } from './empresa-laboral.service';

describe('EmpresalaboralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresaLaboralService = TestBed.get(EmpresaLaboralService);
    expect(service).toBeTruthy();
  });
});
