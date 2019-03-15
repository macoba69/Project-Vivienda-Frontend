import { TestBed } from '@angular/core/testing';

import { EmpresaConvenioService } from './empresa-convenio.service';

describe('AsistenteSocialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresaConvenioService = TestBed.get(EmpresaConvenioService);
    expect(service).toBeTruthy();
  });
});
