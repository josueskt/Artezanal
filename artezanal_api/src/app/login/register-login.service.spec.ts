/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterLoginService } from './register-login.service';

describe('Service: RegisterLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterLoginService]
    });
  });

  it('should ...', inject([RegisterLoginService], (service: RegisterLoginService) => {
    expect(service).toBeTruthy();
  }));
});
