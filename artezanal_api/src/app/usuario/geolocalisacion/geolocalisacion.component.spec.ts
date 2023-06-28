import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalisacionComponent } from './geolocalisacion.component';

describe('GeolocalisacionComponent', () => {
  let component: GeolocalisacionComponent;
  let fixture: ComponentFixture<GeolocalisacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocalisacionComponent]
    });
    fixture = TestBed.createComponent(GeolocalisacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
