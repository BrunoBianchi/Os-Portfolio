import { TestBed } from '@angular/core/testing';

import { HttpHandlerServiceService } from './http-handler-service.service';

describe('HttpHandlerServiceService', () => {
  let service: HttpHandlerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
