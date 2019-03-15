import { TestBed } from '@angular/core/testing';

import { DatosFamiliaresService } from './datos-familiares.service';

describe('DatosFamiliaresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosFamiliaresService = TestBed.get(DatosFamiliaresService);
    expect(service).toBeTruthy();
  });
});
