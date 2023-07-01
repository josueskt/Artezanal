/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Home_serviciosService } from './home_servicios.service';

describe('Service: Home_servicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Home_serviciosService]
    });
  });

  it('should ...', inject([Home_serviciosService], (service: Home_serviciosService) => {
    expect(service).toBeTruthy();
  }));
});
