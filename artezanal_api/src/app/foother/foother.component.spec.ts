import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FootherComponent } from './foother.component';

describe('FootherComponent', () => {
  let component: FootherComponent;
  let fixture: ComponentFixture<FootherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FootherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
