import { TestBed } from '@angular/core/testing';

import { MapRoutService } from './map-rout.service';

describe('MapRoutService', () => {
  let service: MapRoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapRoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
