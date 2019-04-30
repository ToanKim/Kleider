import { TestBed } from '@angular/core/testing';

import { ServerServicesService } from './server-services.service';

describe('ServerServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerServicesService = TestBed.get(ServerServicesService);
    expect(service).toBeTruthy();
  });
});
