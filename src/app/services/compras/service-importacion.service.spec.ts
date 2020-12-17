import { TestBed } from '@angular/core/testing';

import { ServiceImportacionService } from './service-importacion.service';

describe('ServiceImportacionService', () => {
  let service: ServiceImportacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceImportacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
