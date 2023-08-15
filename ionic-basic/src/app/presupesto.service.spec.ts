import { TestBed } from '@angular/core/testing';

import { PresupestoService } from './presupesto.service';

describe('PresupestoService', () => {
  let service: PresupestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
